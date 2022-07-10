export default interface myPictures {
  map(arg0: (item: myPictures) => JSX.Element): import("react").ReactNode;
  title: string;
  image: string;
  id: string;
}
