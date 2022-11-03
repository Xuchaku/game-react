type Theme = {
  backgroundColor: string;
  backgorundImage: string;
  board: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
  elements: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
};
export default Theme;
