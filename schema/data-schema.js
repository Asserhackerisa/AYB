const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    رقم_العماره: {
        type: Number,
        required: true
    },
    رقم_الشقه: {
        type: Number,
        required: true
    },
    اسم_الاب: {
        type: String,
        required: true
    },
    عدد_الباغين: {
        type: Number,
        required: true
    },
    عدد_الاطفال: {
        type: Number,
        required: true
    },
    رقم_الهاتف: {
        type: String,
        required: true
    },
    الدخل: {
        type: Number,
        required: true
    },
    الوظيفه: {
        type: String,
        required: true
    },
    ادويه: {
        type: String,
        required: false
    },
    اجراء_طبي: {
        type: String,
        required: false
    },
    حالات_ادمان: {
        type: String,
        required: false
    },
    سبب_الدين1: {
        type: String, 
        required: false
    },
    قيمه_الدين1: {
        type: Number, 
        required: false
    },
    كم_تبقي1: {
        type: Number, 
        required: false
    },
    معاد_استحقاق_الدين1: {
        type: String, 
        required: false
    },
    سبب_الدين2: {
        type: String, 
        required: false
    },
    قيمه_الدين2: {
        type: Number, 
        required: false
    },
    كم_تبقي2: {
        type: Number, 
        required: false
    },
    معاد_استحقاق_الدين2: {
        type: String, 
        required: false
    },
   
    rate:
    {
        type:Number,
        required: true
    },
    الشارع:
    {
        type: String,
        required: true

    },
    by:
    {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Data", dataSchema);
