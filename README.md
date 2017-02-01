Routing on Openstreetmap !
======

Demo : http://routingonosm-brandboat.rhcloud.com/ (offline)

## Requirements
- node and npm
- postgresql, postgis and pgrouting

## Test database
```
psql -U username -d dbname
CREATE EXTENSION postgis;
CREATE EXTENSION pgrouting;
```
You can install the saple data or download your own from openstreetmap

```bash
osm2pgrouting -file "map.osm" \
  -conf "/usr/share/osm2pgrouting/mapconfig.xml" \
  -dbname DBNAME \
  -user USERNAMWE \
  -clean
```

## Run
```
npm install
npm start
```

for further information, please go to : http://brandboat.github.io/2014-08-16-Routing_on_OSM/ (offline, Chinese)
