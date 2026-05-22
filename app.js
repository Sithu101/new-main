const express = require('express');
const app = express();

// သင့်ရဲ့ Routes များ (ဥပမာ)
app.get('/users', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

// အရေးကြီးဆုံးအချက်:
// app ကို module အနေနဲ့ export လုပ်ထားမှ Jest က ခေါ်သုံးနိုင်မှာပါ
module.exports = app;