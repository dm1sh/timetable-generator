import pdfMake from "pdfmake/build/pdfmake";
import { TableCell, TDocumentDefinitions } from "pdfmake/interfaces";

import vfs from "./vfsFonts";

pdfMake.vfs = vfs;

pdfMake.fonts = {
  PTSerif: {
    normal: "PTSerifRegular.ttf",
    bold: "PTSerifBold.ttf",
  },
};

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const getDate = () => {
  const now = new Date();
  return `${now.getDate()} ${months[now.getDay()]} ${now.getFullYear()} года`;
};

const getGroupNumber = (gen: number): number => {
  while (gen > 9) {
    gen -= 9;
  }

  return gen;
};

export const createDocument = (
  classNumber: number,
  generation: number
): void => {
  const doc: TDocumentDefinitions = {
    content: [
      {
        text: "УТВЕРЖДЕН",
        style: "ral",
      },
      {
        text: "приказом БОУ «Югорский физико-математический лицей-интернат»",
        style: "ral",
      },
      {
        text: `№ от ${getDate()}`,
        style: "ral",
        margin: [0, 0, 0, 10],
      },
      {
        table: {
          widths: [
            "4.37%",
            "4.37%",
            "8.8%",
            "13.7%",
            "13.7%",
            "13.7%",
            "13.7%",
            "13.7%",
            "13.7%",
          ],
          body: [
            [
              { text: "Пара", rowSpan: 2, margin: [0, 10, 0, 0] },
              { text: "Урок", rowSpan: 2, margin: [0, 10, 0, 0] },
              { text: "Время", rowSpan: 2, margin: [0, 10, 0, 0] },
              ...["А", "Б", "В"].flatMap<TableCell>(word => [
                {
                  colSpan: 2,
                  text: `${classNumber} «${word}» класс`,
                },
                {},
              ]),
            ],
            [
              "",
              "",
              "",
              ...[1, 2, 3, 4, 5, 6].map<TableCell>(groupIndex => ({
                text: `${getGroupNumber(generation)}${groupIndex} группа`,
              })),
            ],
          ],
        },
      },
    ],
    defaultStyle: {
      font: "PTSerif",
      fontSize: 12,
      alignment: "center",
    },
    styles: {
      ral: {
        alignment: "right",
      },
    },
    pageOrientation: "landscape",
  };

  pdfMake.createPdf(doc).download("test.pdf");
};
