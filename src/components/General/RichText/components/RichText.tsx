import React from "react";
import { limitParagraphByCount } from "@/utils/General.helpers";

interface RichTextProps {
  richText: string;
  limitCount: number;
}

const RichText: React.FC<RichTextProps> = ({ richText, limitCount }) => {
  const createMarkup = () => {
    let html = `${richText}`;
    return {
      __html: limitParagraphByCount(html, limitCount),
    };
  };

  return (
    <div className="rich_text_container">
      {!!richText ? <p dangerouslySetInnerHTML={createMarkup()} /> : <p>-</p>}
    </div>
  );
};

export default RichText;
