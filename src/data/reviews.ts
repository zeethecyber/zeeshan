interface IReviewCard {
  name: string;
  country: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const REVIEWS: IReviewCard[] = [
  {
    name: "wanterman221",
    country: "Senegal",
    review:
      "It was the first time I received such a perfect job on fiveer I can only recommend this seller and place an order as from him. The job asked was just perfect and superior to the expected result",
    rating: 5,
  },
  {
    name: "elkhamlichiamr",
    country: "Moroco",
    review: "Très bon travail réactif et patient je recommande!",
    rating: 5,
  },
  {
    name: "hamzanadeem0199",
    country: "Pakistan",
    review:
      "Would highly recommend this seller. Extremely talented. Code written as per the requirements. In a nutshell, less discussion & more productivity.",
    rating: 5,
  },
  {
    name: "mrnikmg",
    country: "Malaysia",
    review: "He is very fast and very good. Thank you Zeeshan!",
    rating: 5,
  },
  {
    name: "frombottomlabel",
    country: "Italy",
    review: "Highly professional!",
    rating: 5,
  },
];
