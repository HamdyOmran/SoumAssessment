export const mockData = [
  {
    id: 1,
    parentIds: [],
    title: "Phones",
    data: [
      {
        id: 2,
        parentIds: [1],
        title: "Apple",
        data: [
          {
            id: 4,
            parentIds: [1, 2],
            title: "iPhone 6",
            data: [
              { id: 8, parentIds: [1, 2, 4], title: "128GB" },
              { id: 9, parentIds: [1, 2, 4], title: "256GB" },
              { id: 10, parentIds: [1, 2, 4], title: "512GB" },
            ],
          },
          {
            id: 5,
            parentIds: [1, 2],
            title: "iPhone 7",
            data: [
              { id: 11, parentIds: [1, 2, 5], title: "128GB" },
              { id: 12, parentIds: [1, 2, 5], title: "256GB" },
              { id: 13, parentIds: [1, 2, 5], title: "512GB" },
            ],
          },
        ],
      },
      {
        id: 3,
        parentIds: [1],
        title: "Samsung",
        data: [
          {
            id: 6,
            parentIds: [1, 3],
            title: "s20",
            data: [
              { id: 14, parentIds: [1, 3, 6], title: "128GB" },
              { id: 15, parentIds: [1, 3, 6], title: "256GB" },
              { id: 16, parentIds: [1, 3, 6], title: "512GB" },
            ],
          },
          {
            id: 7,
            parentIds: [1, 3],
            title: "s21",
            data: [
              { id: 17, parentIds: [1, 3, 7], title: "128GB" },
              { id: 18, parentIds: [1, 3, 7], title: "256GB" },
              { id: 19, parentIds: [1, 3, 7], title: "512GB" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 20,
    parentIds: [],
    title: "Computers",
    data: [
      {
        id: 21,
        parentIds: [20],
        title: "Macbook",
        data: [
          {
            id: 23,
            parentIds: [20, 21],
            title: "Macbook Air",
            data: [
              { id: 25, parentIds: [20, 21, 23], title: "128GB" },
              { id: 26, parentIds: [20, 21, 23], title: "256GB" },
              { id: 27, parentIds: [20, 21, 23], title: "512GB" },
            ],
          },
          {
            id: 24,
            parentIds: [20, 21],
            title: "Macbook Pro",
            data: [
              { id: 28, parentIds: [20, 21, 24], title: "128GB" },
              { id: 29, parentIds: [20, 21, 24], title: "256GB" },
              { id: 30, parentIds: [20, 21, 24], title: "512GB" },
            ],
          },
        ],
      },
      {
        id: 22,
        parentIds: [20],
        title: "Lenovo",
        data: [
          {
            id: 31,
            parentIds: [20, 22],
            title: "Ideapad 1",
            data: [
              { id: 33, parentIds: [20, 22, 31], title: "128GB" },
              { id: 34, parentIds: [20, 22, 31], title: "256GB" },
              { id: 35, parentIds: [20, 22, 31], title: "512GB" },
            ],
          },
          {
            id: 32,
            parentIds: [20, 22],
            title: "Ideapad 2",
            data: [
              { id: 36, parentIds: [20, 22, 32], title: "128GB" },
              { id: 37, parentIds: [20, 22, 32], title: "256GB" },
              { id: 38, parentIds: [20, 22, 32], title: "512GB" },
            ],
          },
        ],
      },
    ],
  },
];
