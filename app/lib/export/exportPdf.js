import { jsPDF } from "jspdf";
import { cleanMarkdown } from "./cleanMarkdown";

export function exportPdf(title, content) {
  const doc = new jsPDF();

  const cleanText = cleanMarkdown(content);

  const lines = doc.splitTextToSize(cleanText, 180);

  doc.setFontSize(16);
  doc.text(title, 15, 20);

  doc.setFontSize(11);
  doc.text(lines, 15, 35);

  doc.save(`${title}.pdf`);
}
