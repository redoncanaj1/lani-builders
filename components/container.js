import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container w-screen md:w-full mx-auto md:px-2 xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-1",
        props.className
      )}>
      {props.children}
    </div>
  );
}
