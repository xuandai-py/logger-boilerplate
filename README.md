
# Create a log file with winston&morgan.

Logger boilerplate taking advantages of Parcel strengths.
Offering powerful features from Winston and Morgan.

## Getting started

Chose a folder and create your log:

```bash
$ npx logger-boilerplate
```
This logger ofers two options: `systemLogs` and `morganMiddleware`
Script: 
- Create a directory named utils.
- Copy logger.boiler.js then create logger.hercli.js with sample logging file.
- Install needing packages.
- Ready to launch.

## Usage
Acting as middleware: 
```bash
>> app.use(morganMiddleware);
```

Calling in file:
```bash
app.get("/document", async (req, res) => {
    const { data, error } = await [API]
    if (error) {
        systemLogs.error('error to get document: ', error);
        res.status(500).json({ error });
    } else {
        systemLogs.info('data from api', data);
        res.status(200).json({ data });
    }
})
```

## Requirements
Nodejs-NPM-NPX 