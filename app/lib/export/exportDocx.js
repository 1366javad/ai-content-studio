import { Document, Paragraph, Packer, TextRun } from "docx";
import { cleanMarkdown } from "./cleanMarkdown";

export async function exportDocx(title, content) {
  const cleanText = cleanMarkdown(content);

  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: title,
                bold: true,
                size: 32,
              }),
            ],
          }),

          ...cleanText.split("\n").map(
            (line) =>
              new Paragraph({
                children: [new TextRun(line)],
              }),
          ),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = `${title}.docx`;
  a.click();

  URL.revokeObjectURL(url);
}
