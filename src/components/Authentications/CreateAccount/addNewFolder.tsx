/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Formik } from 'formik';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../../../utils/InputField';
import { TextTag } from '../../../utils/Typography';
import Button from '../../../utils/Button';
import { createNewFolderAction } from '../../../store/actions/folders';
import { Spinner } from '../../../utils/Spinner';
import { setActiveFolders } from '../../../store/reducers/folders';
interface AddNewFolder {
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

interface FormValues {
  folderName: string;
  contains: string;
}

interface FormErrors {
  folderName?: string;
  contains?: string;
}

const AddNewFolder: React.FC<AddNewFolder> = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const { projects }: any = useSelector((state: RootState) => state);

  const { activeProject } = projects;
  return (
    <div className="pt-[87px] sm:w-[320px] w-full min-h-screen mx-auto sm:px-0 px-5">
      <div className="max-w-[320px] min-h-screen mx-auto">
        <TextTag as="h6" text={"Let's Create a Content Folder"} className={'h6 mb-[42px]'} color={''} />
        <div className="mb-[42px]">
          <div className="mb-5">
            <Formik
              initialValues={{
                folderName: '',
                contains: '',
              }}
              validate={(values: FormValues) => {
                const errors: FormErrors = {};
                if (!values.folderName) {
                  errors.folderName = 'Required';
                }
                if (!values.contains) {
                  errors.contains = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(async () => {
                  const res = await createNewFolderAction(activeProject?.id, values);
                  if (res.status === 201) {
                    dispatch(setActiveFolders(res?.data));
                    setSubmitting(false);
                    setActiveTab('success');
                  }
                }, 1000);
              }}
            >
              {({
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="mb-5">
                      <InputField
                        label="Folder name"
                        type="text"
                        name="folderName"
                        placeholder=""
                        className="!mb-0"
                        icon=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.folderName}
                        error={errors.folderName}
                        touch={touched.folderName}
                        disabled={false}
                      />
                      <TextTag as="p" text={'e.g My blog posts'} className={'p-small'} color={'text-textGray'} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <TextTag as="label" text={'URL'} className={'p-small'} color={'text-textGray'} />
                  </div>
                  <div className="mb-[42px]">
                    <InputField
                      label=""
                      type="text"
                      name="contains"
                      placeholder=""
                      className="!mb-0"
                      icon=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contains}
                      error={errors.contains}
                      touch={touched.contains}
                      disabled={false}
                    />
                    <TextTag
                      as="label"
                      text={'e.g /blog if you want all your content inside this URL. Or something more specific like /blog/topic/'}
                      className={'p-small '}
                      color={'text-textGray'}
                    />
                  </div>

                  <div className="pb-6">
                    <Button
                      text={isSubmitting ? <Spinner className={''} /> : 'Add folder'}
                      onClick={() => {}}
                      type="submit"
                      disabled={!values.folderName && !values.contains ? true : false}
                      className={`w-full !font-medium !leading-5 flex justify-center  ${
                        !values.folderName || !values.contains ? '!bg-lightGray text-gray-500' : '!bg-customBlue !text-white'
                      }`}
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewFolder;
