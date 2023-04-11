import { PrismicRichText } from "@prismicio/react";

const RichText = ({ field, className, style }) => {
  return (
    field && (
      <div className={className} style={style}>
        <PrismicRichText field={field} />
      </div>
    )
  );
};

export default RichText;
