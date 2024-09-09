import { Loader, Page, FooterOfPage, GotoTopBTN } from "./others";
export let NAN = (e) => alert(e + " is currently unavailabe");
let FullPage = () => {
  return (
    <>
      {/* Important for tab focusing
      <div tabIndex={0} scr="" /> */}
      <Loader />
      <Page NAN={NAN} />
      <FooterOfPage />
      <GotoTopBTN />
    </>
  );
};
export default FullPage;
