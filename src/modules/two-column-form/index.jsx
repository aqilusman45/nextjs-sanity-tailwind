import { groq } from "next-sanity";
import classnames from "classnames";
import Heading from "../../components/heading";
import RichText from "../../components/rich-text";
import Image from "next/image";

export const TWO_COLUMN_FORM = groq`
_type == 'twoColumnForm' =>{
    ...
  }
`;

export default function TwoColumnForm({ _id, id, otherClasses,subText ,form,heading,variant="dark"}) {
  const twoColumnFormClasses = classnames(otherClasses, 'relative w-full ',variant==="dark"?"two-column-container bg-blue-500":"two-column-container-light bg-neutral-200",);
console.log(subText);
  return (
    <section
      id={_id ? _id : id}
      className={twoColumnFormClasses}
      data-testid="two-column-form"
    >
      <Image src="/images/two-column-pattern.png" alt="background-pattern" className=" h-full absolute top-0 right-0" width={700} height={200}  />
      <div className="mx-auto max-w-default">
        <div className=" relative w-full flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 lg:px-120 lg:py-120">
         <div className="w-2/4 flex flex-col gap-10">
         <Heading type="h4" otherClasses={classnames( 'max-w-450 capitalize font-aeronik-pro',variant === "dark"?"text-white":"text-blue")} >{heading}</Heading> 
         <RichText variant={variant} richText={subText} otherClasses={classnames('max-w-450',variant==="dark"?"global-richtext-dark ":"global-richtext-light")} />

         </div>
         <div className="w-2/4 text-white">ASA</div>
      </div>
      </div>
        {/* <Heading type="h4">{heading}</Heading> */}
        {/* <RichText/> */}
    </section>
  );
}
