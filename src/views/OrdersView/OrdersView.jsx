import React, { useEffect, useCallback, useContext, useState } from "react";
import Loader from "react-loader";
import { EventsApi, UserApi, ServiceApi } from "../../utils/api";
import UserStore from "../../stores/UserStore";
import Box from "../../components/Box/Box";

const OrdersView = () => {
    const [loading, setLoading] = useState(false);
    const userStore = useContext(UserStore);
    const { user } = userStore.user;
    const updateHandler = useCallback(async () => {
        setLoading(true);
        const _events = (await UserApi.events()).data.data.map(x => x.reservation);
        const _treatments = (await UserApi.spa()).data.data.map(x => x.appointment);
        const _services = (await ServiceApi.get(user.hotel)).data.data;
        console.log(_events, _treatments, _services);
        setLoading(false);
    });

    useEffect(() => {
        (async () => {
            await updateHandler();
        })();
    }, []);
    return (
        <Box>
            <Loader loaded={!loading}>
            
            </Loader>
        </Box>
    )
};

const OrderEventItem = ({_id, event}) => 
(
    <li className="order-event-item"></li>
)

export default OrdersView;