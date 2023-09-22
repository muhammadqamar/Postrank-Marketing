/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { TextTag } from '../../../utils/Typography';
import Button from '../../../utils/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Formik } from 'formik';
import DropDown from './projectSelect';
import { Spinner } from '../../../utils/Spinner';
// import { getPropertySettingsAction } from '../../../store/actions/propertySetting';
import { setActivePropertySettings } from '../../../store/reducers/accountDetails';
interface ConnectProject {
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

const ConnectProject: React.FC<ConnectProject> = ({ setActiveTab }) => {
  const [accountdata, setaccountdata] = useState([]);
  const { accountDetails }: any = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { userProfile, userAccountDetails } = accountDetails;

  useEffect(() => {
    if (userAccountDetails) {
      setaccountdata(userAccountDetails?.accountSummaries);
    }
  }, [userAccountDetails]);
  return (
    <div className="pt-[87px] sm:w-[320px] w-full sm:px-0 px-5 min-h-screen mx-auto">
      <TextTag as="h6" text={'Connect your project'} className={'h6 mb-[42px]'} color={''} />
      <div className="w-full flex items-center  gap-3 p-3 border border-solid border-commonGray rounded-[7px] mb-5">
        <img src={userProfile?.user?.avatar} alt="user" className="w-8 h-8 rounded-full object-contain" />
        <div className="">
          <TextTag as="p" text={`${userProfile?.user?.firstName} ${userProfile?.user?.lastName}`} className={'p-large mb-[2px]'} color={''} />
          <TextTag as="p" text={userProfile?.user?.email} className={'p-medium '} color={'text-primaryGray'} />
        </div>
      </div>
      <div className="mb-[42px]">
        <Formik
          initialValues={{
            account: {},
            property: {},
            view: {},
          }}
          validate={(values: any) => {
            const errors: any = {};
            if (!values.account?.id) {
              errors.account = 'Required';
            }
            if (!values.property?.id) {
              errors.property = 'Required';
            }
            if (!values.view?.id && values.property.propertySummaries?.length > 0) {
              errors.view = 'Required';
            }

            return errors;
          }}
          onSubmit={(values: any, { setSubmitting }) => {
            (async () => {
              // const res = await getPropertySettingsAction(userProfile?.user?.id, {
              //   accountId: values.account?.account || '',
              //   // websiteUrl: values.property?.websiteUrl || "https://airgap.io",
              //   propertyId: values.view?.id ? '' : values.property.property,
              //   viewId: values.view?.id || '',
              // });
              // if (res.status === 201) {
              setSubmitting(false);
              dispatch(setActivePropertySettings(values));
              setActiveTab('createNewProject');
              // }
            })();

            // console.log("userData", JSON.stringify(values, null, 2));
          }}
        >
          {({
            values,
            errors,
            // touched,
            // handleChange,
            // handleBlur,
            handleSubmit,

            setFieldValue,
            isSubmitting /* and other goodies */,
          }: any) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <TextTag as="label" text={'Account'} className={'p-small'} color={'text-textGray'} />
                <DropDown
                  data={accountdata || []}
                  className=""
                  name="account"
                  value={values.account}
                  onChange={(postData) => {
                    setFieldValue('account', postData);
                    setFieldValue('property', {});
                    setFieldValue('view', {});
                  }}
                  disabled={false}
                  disabledValue={undefined}
                />
              </div>
              {errors.account && <TextTag as="label" text={errors.account} className={'p-small'} color={'text-error-300'} />}

              <div className="mb-5">
                <TextTag as="label" text={'Property'} className={'p-small'} color={'text-textGray'} />
                <DropDown
                  data={values.account.propertySummaries || []}
                  className=""
                  name="property"
                  value={values.property}
                  onChange={(postData) => {
                    setFieldValue('property', postData);
                    setFieldValue('view', {});
                  }}
                  disabled={values.account?.propertySummaries?.length > 0 ? false : true}
                  disabledValue={undefined}
                />
                {errors.property && <TextTag as="label" text={errors.property} className={'p-small'} color={'text-error-300'} />}
              </div>
              <div className="mb-5">
                <TextTag as="label" text={'GSC property (Not Requrired for GA4)'} className={'p-small'} color={'text-textGray'} />
                <DropDown
                  data={values.property.profiles || []}
                  className=""
                  name="view"
                  value={values.view}
                  onChange={(postData) => setFieldValue('view', postData)}
                  disabled={values.property?.profiles?.length > 0 ? false : true}
                  disabledValue={undefined}
                />
                <TextTag as="label" text={errors.view && errors.view} className={'p-small'} color={'text-error-300'} />
              </div>
              <div className="pt-[22px]">
                <Button
                  text={isSubmitting ? <Spinner className="" /> : 'Continue '}
                  onClick={() => {}}
                  type="submit"
                  // disabled={!values.account?.name || !values.property?.name ? true : false}
                  className={`w-full !font-medium !leading-5 flex justify-center  ${'!bg-customBlue !text-white'}`}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConnectProject;
