/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { RootState } from '../../../store';
import InputField from '../../../utils/InputField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../utils/Button/index';
import { TextTag } from '../../../utils/Typography';
import { createNewProjectAction } from '../../../store/actions/projects';
import { Spinner } from '../../../utils/Spinner';
import { setActiveProjectDetail } from '../../../store/reducers/projects';
import projctImage from '../../../assets/images/dropdownIcon/Citizen-Remote.svg';
// import { uploadProjectImage } from "../../../Services/projects";
interface CreateNewProject {
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

const CreateNewProject: React.FC<CreateNewProject> = ({ setActiveTab }) => {
  const fileInputRef: any = useRef(null);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const accountDetails: any = useSelector((state: RootState) => state.accountDetails);
  const { activePropertySettings } = accountDetails;
  console.log('selectedImage', selectedImage);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16 px-5">
      <div className="sm:w-80 w-full">
        <TextTag as="h6" text={'Project name'} className={'h6 mb-[42px]'} color={''} />
        <Formik
          initialValues={{
            name: '',
            projectImage: {},
          }}
          validate={(values: any) => {
            const errors: any = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.projectImage.name) {
              errors.projectImage = 'Required';
            }
            return errors;
          }}
          onSubmit={async (values: any, { setSubmitting }) => {
            const formData = new FormData();
            formData.append('image', values.projectImage);
            await axios
              .post(`${process.env.REACT_APP_API_URL}/uploads/image`, formData)
              .then(async (response: any) => {
                if (response.status === 201) {
                  const res = await createNewProjectAction(accountDetails?.userProfile?.user?.id, {
                    name: values.name,
                    projectImage: response?.data?.imagePath,
                    accountId: activePropertySettings?.account?.name,
                    propertyId: activePropertySettings?.property?.property,
                    viewId: activePropertySettings?.view?.id,
                  });
                  if (res.status === 201) {
                    dispatch(setActiveProjectDetail(res?.data));
                    setSubmitting(false);
                    setActiveTab('addNewFolder');
                  }
                } else {
                  console.error('Image upload failed');
                }
              })
              .catch((error: any) => {
                console.error('Network error:', error);
              });
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting /* and other goodies */ }: any) => (
            <form onSubmit={handleSubmit}>
              <InputField
                label="Project name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors?.name}
                touch={touched.name}
                icon={''}
                placeholder={''}
                className={''}
                disabled={false}
              />
              <div className="flex sm:flex-nowrap flex-wrap items-center justify-between gap-[32px] mb-[8px]">
                <div className="flex items-center gap-6">
                  <TextTag as="p" text={'Logo'} className={'p-small'} color={'text-textGray'} />
                  <img src={selectedImage || projctImage} alt="" className="rounded-full w-10 h-10 bg-secondaryGray" />
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    text="Upload new"
                    onClick={handleImageUpload}
                    className="p-medium !font-medium bg-white border-2 border-solid border-customBlue !py-[7px] !px-3 flex justify-center "
                    type={'button'}
                  />
                  <input
                    type="file"
                    name="projectImage"
                    value={undefined}
                    className="hidden"
                    accept="image/*"
                    onBlur={handleBlur}
                    ref={fileInputRef}
                    onChange={(e: any) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFieldValue('projectImage', file);
                        const reader = new FileReader();
                        reader.onload = (event: any) => {
                          setSelectedImage(event.target.result);
                        };
                        reader.readAsDataURL(file);
                      }

                      console.log('file', e.target.files[0]);
                    }}
                  />
                  <Button
                    text="Delete"
                    onClick={() => setSelectedImage(null)}
                    className="p-medium !font-medium bg-white text-gray-900 !py-[7px] !px-3  flex justify-center "
                    type={undefined}
                  />
                </div>
              </div>
              <TextTag as="p" text={errors.projectImage && touched.projectImage && errors.projectImage} className={'p-small mb-[42px]'} color={'text-secondaryRed'} />

              <Button
                text={isSubmitting ? <Spinner className={''} /> : 'Continue'}
                onClick={() => {}}
                className={`w-full !font-medium !leading-5 flex justify-center mb-4 ${!values.name ? '!bg-lightGray text-gray-500' : '!bg-customBlue !text-white'} `}
                type={'submit'}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewProject;
