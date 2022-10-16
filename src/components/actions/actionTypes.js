export const handlePersonData = (personData) => {
  return {
    type: "PERSON",
    payload: {
      personData,
    },
  };
};
export const handleHighlight = (data) => {
  return {
    type: "HIGHLIGHT",
    payload: {
      data,
    },
  };
};
export const handleOrgData = (orgData) => {
  return {
    type: "ORG",
    payload: {
      orgData,
    },
  };
};

export const handleRecords = (record) => {
  return {
    type: "RECORDS",
    payload: {
      record,
    },
  };
};
