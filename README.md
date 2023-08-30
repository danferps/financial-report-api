# financial-report-api
run

```
npm install
npx prisma migrate dev --init
```
After run prisma command you will see a sqlite database created in `/prisma/dev.db` file

Test the api using Thunderclient or Postman, this is body example to create a new rule
```json
{
  "name": "registredHours",
  "description": "Test",
  "type": "true|false|equal|greaterThan|lowerThan",
  "markets": [
    {
      "name": "cr",
      "columns": "rateHours, 5, 10",
      "page": 13
    },
    {
      "name": "colombia",
      "columns": "7, 8",
      "page": 1
    }
  ]
}
```
