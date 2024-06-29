import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, Tooltip } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/apiConfig';



const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const CouponCard = ({ code, description, discount, startDate, expiryDate, timesUsed, maxTimesUse, onClick }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast.success('Mã giảm giá đã được sao chép');
    };

    return (
        <Card sx={{ marginBottom: 2, border: '1px dashed #d3c6ad', backgroundColor: '#f3ece3' }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        {/* <Typography variant="subtitle2" className='text-gray-600 font-md text-xl'>Mã giảm giá</Typography> */}
                        <Tooltip title="Click to copy">
                            <Typography className='font-semibold text-2xl' variant="h6" component="div" onClick={handleCopy} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#ad8c59' }}>
                                {code} 
                            </Typography>
                        </Tooltip>
                        <Typography variant="body2" color="text.secondary">{description}</Typography>
                        <Typography variant="body2">Giảm trực tiếp vào hóa đơn {discount}₫  </Typography>
                        <Typography variant="body2">Ngày bắt đầu: {startDate}</Typography>
                        <Typography variant="body2" color="error">Hạn SD: {expiryDate}</Typography>
                        <Typography variant="body2">Đã sử dụng: {timesUsed}/{maxTimesUse} lần</Typography>
                    </Box>
                    <Button className='hover:bg-[#ad8c59]' variant="contained" sx={{ height: 40, marginLeft: 2, backgroundColor: '#d3c6ad', color: '#fff' }} onClick={handleCopy}>
                        Lấy Mã
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

const CouponList = () => {
    const handleButtonClick = (code) => {
        console.log(`${code} clicked`);
    };

    const [coupons, setCoupons] = useState([]);

    const getListCoupon = async() => {
      const {data}= await axios.get(`${API_BASE_URL}admin/coupons/get-all`)
      setCoupons(data)
    };
    useEffect(() => {getListCoupon()}, []);

    return (
        <Grid className='mt-4' container justifyContent="center" spacing={2} gap={4}>
            {coupons.map(coupon => (
                <Grid item xs={12} sm={6} md={4} key={coupon.id}>
                    <CouponCard
                        code={coupon.code}
                        description={coupon.discountDescription}
                        discount={coupon.discountValue}
                        startDate={formatDateTime(coupon.couponStartDate)}
                        expiryDate={formatDateTime(coupon.couponEndDate)}
                        timesUsed={coupon.timesUsed}
                        maxTimesUse={coupon.maxTimesUse}
                        onClick={() => handleButtonClick(coupon.code)}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CouponList;
