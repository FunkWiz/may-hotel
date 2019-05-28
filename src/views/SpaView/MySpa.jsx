import React, { useEffect, useState, useCallback, useContext } from "react";
import Loader from "react-loader";
import UserStore from "../../stores/UserStore";
import { treatmentNames } from "./consts";
import { UserApi } from "../../utils/api";

const MySpa = () => {
  const userStore = useContext(UserStore);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [success, setSuccess] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [treatmentName, setTreatmentName] = useState(treatmentNames[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    (async () => {
      await updateTreatments();
    })();
  }, []);

  const updateTreatments = useCallback(() => {
    (async () => {
      setLoading(true);
      const result = await UserApi.spa();
      setTreatments(result.data.data);
      setLoading(false);
    })();
  });

  const handleTreatmentClick = useCallback(
    (id, action) => {
      (async () => {
        setLoading(true);
        try {
          await SpaApi.add(id);
          const treatment = treatments.find(t => t._id === id);
          setSuccess(true);
          setModalText(
            getTextSummary(
              treatment.therepist,
              treatment.string.date,
              treatment.string.time,
              treatmentName
            )
          );
          setModalOpen(true);
        } catch (e) {
          setModalText("לא ניתן להזמין את הטיפול");
          setModalOpen(true);
        }
        setLoading(false);
      })();
    },
    [treatments]
  );

  return (
    <Box>
      <Loader loaded={!loading}>
        <MySpaList list={treatments} onItemClick={handleTreatmentClick} />
      </Loader>
    </Box>
  );
};

const MySpaList = ({ list, onItemClick }) => {
  if (!list || !list.length) {
    return <span>לא נמצאו טיפולים לתאריך זה</span>;
  }
  return (
    <ul>
      {list.map((item, idx) => (
        <MySpaItem {...item} onClick={onItemClick} key={idx} />
      ))}
    </ul>
  );
};

const MySpaItem = ({ therepist, _id, onClick, string }) => {
  const _onClick = () => {
    onClick(_id);
  };
  return (
    <li onClick={_onClick} className="my-spa-item">
      {therepist}, {string.time}
    </li>
  );
};

export default MySpa;
