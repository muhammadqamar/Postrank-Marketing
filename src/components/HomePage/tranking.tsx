import React from "react"
import { TextTag } from "../../utils/Typography"
import Button from "../../utils/Button"
import GoogleLogo from "../../assets/images/icons/google-logo.svg"

const Tranking = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center rounded-[25px]  px-6 py-[56px] md:py-[64px] bg-Blue-500">
        <TextTag
          as="h3"
          text="Ready to start ranking? "
          color="text-white"
          className="md:text-[38px] md:leading-[48px] font-medium md:tracking-[-0.72px] text-[32px] leading-[42px] tracking-[-0.48px] mb-2 text-center"
        />
        <TextTag
          as="p"
          text="Just log in! You already have an account!"
          color="text-Blue-100"
          className="p-large mb-[35px] text-center"
        />
        <Button
          type="button"
          disabled={false}
          onClick={() => {}}
          text="Sign in with Google"
          icon={
            <img src={GoogleLogo} alt="google logo" className="w-auto h-auto" />
          }
          className="!min-w-[200px] !font-['Roboto'] font-medium text-[14px] !leading-[normal] !tracking-normal text-Blue-400 bg-white border border-solid border-Blue-400  rounded-sm !px-2 !py-[11px] flex items-center justify-start gap-6 shadow-small-shadow"
        />
      </div>
    </div>
  )
}

export default Tranking
