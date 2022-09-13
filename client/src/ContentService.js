import React, { useState, useEffect } from "react";
import axios from "axios";

export default class ContentService {
  getAllData() {
    return axios
      .get("http://192.168.1.14:5000/getAllData")
      .then((res) => res.data);
  }

  getTodayData() {
    return axios
      .get("http://192.168.1.14:5000/getTodayData")
      .then((res) => res.data);
  }
}
