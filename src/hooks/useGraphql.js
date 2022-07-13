const DUMMY_PARAMS = {
  popularity_lesser: 30000,
  status_in: ["FINISHED"],
  averageScore_greater: 80,
  endDate_lesser: 20200713,
  sort: "POPULARITY_DESC"
};

function useGraphql(query_params, page_params) {
  let my_params = "";

  for (const key in DUMMY_PARAMS) {
    my_params += key + ":" + DUMMY_PARAMS[key] + ",";
  }

  let query = `query {
    Page(perPage:50) {
      media(${my_params}) {
        id
        title {
          english
          romaji
        }
        averageScore
        coverImage {
          large
          medium
        }
        endDate {
          year
          month
          day
        }
        status
        popularity
        relations {
          edges {
            relationType
          }
          nodes {
            title {
              romaji
              english
            }
            averageScore
          }
        }
      }
    }
  }`;

  return query;
}

export default useGraphql;
