import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
    
      className={cx(
        "container px-4 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "pt-5 lg:pt-8",
        props.className
      )}>
        
         <link rel="icon" href="/img/logo.png" type="image/x-icon"></link>
      {props.children}
    </div>
  );
}
