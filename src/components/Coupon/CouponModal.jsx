import React from "react"
import CouponCard from "./CouponCard"

const dataCoupon = [
    {
        id: 1,
        logo: "https://ik.imagekit.io/marQofy034/Logo/Logo-gojek-vector-transparent-PNG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455068804",
        value: "POTONGAN 20% GOCAR",
        code: "GOCAR20",
        desc: "Potongan 20% (Maksimal Rp. 8.000,-) untuk traksaksi apapun",
        period: "from 1 Jan until 31 Jan",
        min: 5
    },
    {
        id: 2,
        logo: "https://ik.imagekit.io/marQofy034/Logo/Logo-gojek-vector-transparent-PNG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455068804",
        value: "CASHBACK RP. 10.000",
        code: "CASHBACK10",
        desc: "Nikmati Cashback hingga 10K untuk transaksi Go-Ride",
        period: "valid until 16 Jan",
        min: 200
    },
    {
        id: 3,
        logo: "https://ik.imagekit.io/marQofy034/Logo/Logo-gojek-vector-transparent-PNG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455068804",
        value: "DISKON Rp. 35.000,- GOCAR",
        code: "CARPACK35K",
        desc: "Dapatkan potongan diskon Rp. 35.000,- untuk transaksi Go-Car apapun dengan minimum pembayaran Rp. 100.000,-",
        period: "valid until 31 Jan",
        min: 500
    },
    {
        id: 4,
        logo: "https://ik.imagekit.io/marQofy034/Logo/Logo-gojek-vector-transparent-PNG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455068804",
        value: "SALDO GOPAY 100K!",
        code: "GOPAYPACK100",
        desc: "Segera klaim saldo GOPAY sebesar Rp. 100.000,- sebagai bentuk kerjasama Gojek dan TravelPack",
        period: "until claimed",
        min: 1500
    },
    {
        id: 5,
        logo: "https://ik.imagekit.io/marQofy034/Logo/pngwing.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455404896",
        value: "DISKON 10% GRAB",
        code: "GRABPACK10",
        desc: "Diskon 10% (maksimal 5000) di transaksi Grab Ride",
        period: "16 Jan - 31 Jan",
        min: 1
    },
    {
        id: 6,
        logo: "https://ik.imagekit.io/marQofy034/Logo/pngwing.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455404896",
        value: "DISKON 20%",
        code: "GRABPACK20",
        desc: "Diskon 20% (maksimal 50.000) di transaksi Grab Ride atau Grab Car",
        period: "16 Jan - 31 Jan",
        min: 350
    },
    {
        id: 7,
        logo: "https://ik.imagekit.io/marQofy034/Logo/pngwing.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455404896",
        value: "CASHBACK Rp. 50.000,-",
        code: "CASHPACK50",
        desc: "Dapatkan Cashback senilai Rp. 50.000 dengan minimum transaksi sebesar Rp. 75.000,- di aplikasi Grab",
        period: "16 Jan - 31 Jan",
        min: 1000
    },
    {
        id: 8,
        logo: "https://ik.imagekit.io/marQofy034/Logo/pngwing.com.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673455404896",
        value: "OVO Rp. 100.000,-",
        code: "OVOPACK100K",
        desc: "Segera ambil saldo OVO senilai Rp. 100.000,- sebagai bentuk kerjasama GRAB dengan TravelPack",
        period: "Once",
        min: 2000
    }
]

export default function CouponModal({point}) {
    const [showModal, setShowModal] = React.useState(false)
    return (
        <>
            <button className="inline-block shrink-0 rounded-md mx-auto bg-yelloku px-12 py-3 font-medium  hover:bg-black hover:text-yelloku duration-200 my-5"
                type="button"
                onClick={() => setShowModal(true)}>
                Show My Coupons
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none my-10" style={{ minWidth: "1300px" }}>
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">My Coupons</h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 grid grid-cols-2 overflow-auto" style={{ maxHeight: "500px" }}>
                                    {dataCoupon.map((el) => {
                                        if (point >= el.min) return <CouponCard promo={el} />
                                    })}
                                    {(point == 0) ? <h1>You don't have any coupon yet, start your journey in our forum or review!</h1> : null}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
