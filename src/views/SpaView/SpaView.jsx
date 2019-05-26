import React, { useEffect, useContext } from "react";
import Box from "../../components/Box/Box";
import { SpaApi } from "../../utils/api";
import UserStore from "../../stores/UserStore";

const SpaView = () => {
  const userStore = useContext(UserStore);
  useEffect(() => {

    (async () => {
      console.log(userStore.hotelId);
      const result = await SpaApi.get(userStore.hotelId);
      console.log(result);
    })();
  }, []);

  return (
    <>
      <Box className="spa-view">
      </Box>
    </>
  );
};

export default SpaView;
