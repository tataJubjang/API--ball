import fetch from "node-fetch";
import * as cheerio from "cheerio";
import PRICE_CONFIG from "../config/price";

const priceHandler = async () => {
  const response = await fetch(PRICE_CONFIG.URL, { method: "GET" });
  const statusCode = response.status;
  const body = await response.text();

  if (statusCode !== 200) {
    return {
      status: "failure",
      response: "Service is unavailable, Please try again later.",
    };
  }

  const $ = cheerio.load(body);

  const date = $(PRICE_CONFIG.SELECTOR.DATE).text().trim();
  const then1 = $(PRICE_CONFIG.SELECTOR.then1).text().trim();
  const then2 = $(PRICE_CONFIG.SELECTOR.then2).text().trim();
  const then3 = $(PRICE_CONFIG.SELECTOR.then3).text().trim();
  const then4 = $(PRICE_CONFIG.SELECTOR.then4).text().trim();
  const then5 = $(PRICE_CONFIG.SELECTOR.then5).text().trim();
  const then6 = $(PRICE_CONFIG.SELECTOR.then6).text().trim();
  const then7 = $(PRICE_CONFIG.SELECTOR.then7).text().trim();
  const then8 = $(PRICE_CONFIG.SELECTOR.then8).text().trim();
  const then9 = $(PRICE_CONFIG.SELECTOR.then9).text().trim();
  const then10 = $(PRICE_CONFIG.SELECTOR.then10).text().trim();
  const leag = $(PRICE_CONFIG.SELECTOR.leag).text().trim();
  const leag1 = $(PRICE_CONFIG.SELECTOR.leag1).text().trim();
  const leag2 = $(PRICE_CONFIG.SELECTOR.leag2).text().trim();
  const leag3 = $(PRICE_CONFIG.SELECTOR.leag3).text().trim();
  const leag4 = $(PRICE_CONFIG.SELECTOR.leag4).text().trim();
  const sco = $(PRICE_CONFIG.SELECTOR.sco).text().trim();
  const sco1 = $(PRICE_CONFIG.SELECTOR.sco1).text().trim();
  const sco2 = $(PRICE_CONFIG.SELECTOR.sco2).text().trim();
  const sco3 = $(PRICE_CONFIG.SELECTOR.sco3).text().trim();
  const sco4 = $(PRICE_CONFIG.SELECTOR.sco4).text().trim();
  const date1 = $(PRICE_CONFIG.SELECTOR.date1).text().trim();
  const date2 = $(PRICE_CONFIG.SELECTOR.date2).text().trim();
  const date3 = $(PRICE_CONFIG.SELECTOR.date3).text().trim();
  const date4 = $(PRICE_CONFIG.SELECTOR.date4).text().trim();
  const date5 = $(PRICE_CONFIG.SELECTOR.date5).text().trim();
  

  return {
    status: "success",
                        response: {       
                            football_results: {
                                football: {
                                    date: "เวลา",
                                    date1: date1 +"น.",
                                    leag: "ลีก : " + leag,
                                    team: "ทีมลงแข่ง " + then1 + " กับ " + then2,                    
                                    st: "ผลเตะเข้าประตู " +then1+ " " + sco + " " + then2 ,
                                },
                                football1: {
                                    date: "เวลา",
                                    date1: date2 +"น.",
                                    leag: "ลีก : " + leag1,
                                    team: "ทีมลงแข่ง " + then3 + " กับ " + then4,                    
                                    st: "ผลเตะเข้าประตู " +then3+ " " + sco1 + " " + then4 ,
                                },
                                football2: {
                                    date: "เวลา",
                                    date1: date3 +"น.",
                                    leag: "ลีก : " + leag2,
                                    them: "ทีมลงแข่ง " + then5 + " กับ " + then6,                    
                                    st: "ผลเตะเข้าประตู " +then5+ " " + sco2 + " " + then6 ,
                                },
                                football3: {
                                    date: "เวลา",
                                    date1: date4 +"น.",
                                    leag: "ลีก : " + leag3,
                                    them: "ทีมลงแข่ง " + then7 + " กับ " + then8,                    
                                    st: "ผลเตะเข้าประตู " +then7+ " " + sco3 + " " + then8 ,
                                },
                                football4: {
                                    date: "เวลา",
                                    date1: date5 +"น.",
                                    leag: "ลีก : " + leag4,
                                    them: "ทีมลงแข่ง " + then9 + " กับ " + then10,                    
                                    st: "ผลเตะเข้าประตู " +then9+ " " + sco4 + " " + then10 ,
                                },
      },
    },
  };
};

export default priceHandler;