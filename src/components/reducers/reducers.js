const initialState = {
  personData: {
    personText: [],
    person: [],
  },
  orgData: {
    orgText: [],
    org: [],
  },
  highlight: {
    person: false,
    org: false,
  },
  record: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIGHLIGHT":
      return {
        ...state,
        highlight: {
          [action.payload.data]: !state.highlight[action.payload.data],
        },
      };
    case "PERSON":
      return {
        ...state,
        personData: {
          personText: [
            ...state.personData.personText,
            action.payload.personData,
          ],
          person: [...state.personData.person, action.payload.person],
        },
      };
    case "ORG":
      return {
        ...state,
        orgData: {
          orgText: [...state.orgData.orgText, action.payload.orgData],
          org: "org",
        },
      };
    case "RECORD":
      return {
        ...state,
        record: action.payload.record,
      };
    case "DELETE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;

/*

const object ={
  data:[],
  person:true,
  org:false
}

arr[5] =[1,2,3,4,5]
[...arr,7]





*/
