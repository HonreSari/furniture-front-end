import Dompurify from "dompurify";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  clasName?: string;
}
export default function RichTextRenderer({ content, clasName }: Props) {
  const sanitizedContent = Dompurify.sanitize(content);

  return (
    <div
    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    className={clasName} 
    />
  );
}
