import React, { useState, useContext, useEffect } from "react";
import "./CouponsView.scss";
import PageHeading from "../../components/PageHeading/PageHeading";
import { metadata, pageLinks, coupons, qrCode } from "./consts";
import Box from "../../components/Box/Box";
import UserStore from "../../stores/UserStore";
import { UserApi } from "../../utils/api";

const CouponsView = () => {
    return (
        <>
            <PageHeading title={metadata.title} icon={metadata.icon} links={pageLinks} />
            <div className="coupons-view">
                <Coupons />
            </div>
        </>
    );
};

const Coupons = () => {
    const [showQrCode, setShowQrCode] = useState(false);
    const userStore = useContext(UserStore);
    const { user } = userStore.user;

    useEffect(() => {
        const fetchData = async () => {
            const result = await UserApi.vouchers();
            console.log(result);
        }

        fetchData();
    }, [])

    if (showQrCode) {
        return (
            <Box>
                <QrCode qrImage={user.qrcode} />
            </Box>
        )
    }

    const handleCouponClick = id => {
        setShowQrCode(true);
    }

    return (
        <Box>
            <CouponsList items={coupons} onItemClick={handleCouponClick} />
        </Box>
    )
}

const CouponsList = ({ items, onItemClick }) => (
    <ul className="coupons-list">
        {items.map((item, idx) => <CouponsItem key={idx} {...item} onClick={onItemClick} />)}
    </ul>
)

const CouponsItem = ({ title, location, bgImage, onClick, id }) => (
    <li className="coupons-item">
        <h3 className="coupons-item-title">{title}</h3>
        <div
            className="coupons-item-content"
            style={{ backgroundImage: `url(${bgImage})` }}
            onClick={() => onClick(id)}
        >
            <label className="coupons-item-location">{location}</label>
        </div>
    </li>
)

const QrCode = ({ qrImage }) => (
    <div className="qr-code">
        <Box>
            <h3 className="qr-code-title">{qrCode.title}</h3>
            <div className="qr-code-image-wrapper">
                <img src={qrImage} className="qr-code-image" alt="qr code" />
            </div>
            <div>
                <p className="qr-code-disclaimer">{qrCode.disclaimer}</p>
            </div>
        </Box>
    </div>
);

export default CouponsView;
