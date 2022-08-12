API for checking latest ball-api prices

## Requirements

- Node LTS

## Installation

```sh
$ npm install
$ npm run build
$ npm run start
```

or

```sh
$ yarn
$ yarn build
$ yarn start
```

## API


### Get latest ball prices

##### API request

`GET /latest`

##### API response

<details>
<summary>JSON</summary>

```json
{status: "success",…}
response: {<summary>football_results</summary>: {football: {date: "เวลา", date1: "19:00น.", leag: "ลีก : ไทยลีก",…},…}}
football_results: {football: {date: "เวลา", date1: "19:00น.", leag: "ลีก : ไทยลีก",…},…}
football: {date: "เวลา", date1: "19:00น.", leag: "ลีก : ไทยลีก",…}
date: "เวลา"
date1: "19:00น."
leag: "ลีก : ไทยลีก"
st: "ผลเตะเข้าประตู แบงค็อก ยูไนเต็ด - ขอนแก่น ยูไนเต็ด"
team: "ทีมลงแข่ง แบงค็อก ยูไนเต็ด กับ ขอนแก่น ยูไนเต็ด"
football1: {date: "เวลา", date1: "02:00น.", leag: "ลีก : ลาลีกา", team: "ทีมลงแข่ง โอซาซูนา กับ เซบีญา",…}
date: "เวลา"
date1: "02:00น."
leag: "ลีก : ลาลีกา"
st: "ผลเตะเข้าประตู โอซาซูนา - เซบีญา"
team: "ทีมลงแข่ง โอซาซูนา กับ เซบีญา"
football2: {date: "เวลา", date1: "01:30น.", leag: "ลีก : บุนเดสลีกา",…}
date: "เวลา"
date1: "01:30น."
leag: "ลีก : บุนเดสลีกา"
st: "ผลเตะเข้าประตู ไฟร์บวร์ก - โบรุสเซีย ดอร์ทมุนด์"
them: "ทีมลงแข่ง ไฟร์บวร์ก กับ โบรุสเซีย ดอร์ทมุนด์"
football3: {date: "เวลา", date1: "18:00น.", leag: "ลีก : แชมเปี้ยนชิพ",…}
date: "เวลา"
date1: "18:00น."
leag: "ลีก : แชมเปี้ยนชิพ"
st: "ผลเตะเข้าประตู เชียงใหม่ ยูไนเต็ด - นครศรีธรรมราช"
them: "ทีมลงแข่ง เชียงใหม่ ยูไนเต็ด กับ นครศรีธรรมราช"
football4: {date: "เวลา", date1: "02:00น.", leag: "ลีก : ลีกเอิง", them: "ทีมลงแข่ง นองต์ส กับ ลีลล์",…}
date: "เวลา"
date1: "02:00น."
leag: "ลีก : ลีกเอิง"
st: "ผลเตะเข้าประตู นองต์ส - ลีลล์"
them: "ทีมลงแข่ง นองต์ส กับ ลีลล์"
status: "success"
```
  
<summary>Facebook</summary>
```
 https://www.facebook.com/Yollayud.C7/
```
  

</details>

## Environment variables

create .env file

```
# Analytics (optional)
TRACK_API_URL='' #umami-db-api
UMAMI_WEBSITE_NAME=''
UMAMI_WEBSITE_DOMAIN=''
```
