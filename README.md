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
{"status":"success","response":{"```football_results":{"```football":{"date":"เวลา","date1":"19:00น.","leag":"ลีก : ไทยลีก","team":"ทีมลงแข่ง แบงค็อก ยูไนเต็ด กับ ขอนแก่น ยูไนเต็ด","st":"ผลเตะเข้าประตู แบงค็อก ยูไนเต็ด - ขอนแก่น ยูไนเต็ด"},"football1":{"date":"เวลา","date1":"02:00น.","leag":"ลีก : ลาลีกา","team":"ทีมลงแข่ง โอซาซูนา กับ เซบีญา","st":"ผลเตะเข้าประตู โอซาซูนา - เซบีญา"},"football2":{"date":"เวลา","date1":"01:30น.","leag":"ลีก : บุนเดสลีกา","them":"ทีมลงแข่ง ไฟร์บวร์ก กับ โบรุสเซีย ดอร์ทมุนด์","st":"ผลเตะเข้าประตู ไฟร์บวร์ก - โบรุสเซีย ดอร์ทมุนด์"},"football3":{"date":"เวลา","date1":"18:00น.","leag":"ลีก : แชมเปี้ยนชิพ","them":"ทีมลงแข่ง เชียงใหม่ ยูไนเต็ด กับ นครศรีธรรมราช","st":"ผลเตะเข้าประตู เชียงใหม่ ยูไนเต็ด - นครศรีธรรมราช"},"football4":{"date":"เวลา","date1":"02:00น.","leag":"ลีก : ลีกเอิง","them":"ทีมลงแข่ง นองต์ส กับ ลีลล์","st":"ผลเตะเข้าประตู นองต์ส - ลีลล์"}}}}
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
