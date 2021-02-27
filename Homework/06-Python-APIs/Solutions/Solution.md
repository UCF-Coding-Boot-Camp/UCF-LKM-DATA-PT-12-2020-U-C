
# WeatherPy
----

### Analysis
* As expected, the weather becomes significantly warmer as one approaches the equator (0 Deg. Latitude). More interestingly, however, is the fact that the southern hemisphere tends to be warmer this time of year than the northern hemisphere. This may be due to the tilt of the earth.
* There is no strong relationship between latitude and cloudiness. However, it is interesting to see that a strong band of cities sits at 0, 80, and 100% cloudiness.
* There is no strong relationship between latitude and wind speed. However, in northern hemispheres there is a flurry of cities with over 20 mph of wind.

```python
# Dependencies and Setup
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import requests
import time
from scipy.stats import linregress

# Import API key
from api_keys import weather_api_key

# Incorporated citipy to determine city based on latitude and longitude
from citipy import citipy

# Output File (CSV)
output_data_file = "output_data/cities.csv"

# Range of latitudes and longitudes
lat_range = (-90, 90)
lng_range = (-180, 180)
```

## Generate Cities List

```python
# List for holding lat_lngs and cities
lat_lngs = []
cities = []

# Create a set of random lat and lng combinations
lats = np.random.uniform(lat_range[0], lat_range[1], size=1500)
lngs = np.random.uniform(lng_range[0], lng_range[1], size=1500)
lat_lngs = zip(lats, lngs)

# Identify nearest city for each lat, lng combination
for lat_lng in lat_lngs:
    city = citipy.nearest_city(lat_lng[0], lat_lng[1]).city_name

    # If the city is unique, then add it to a our cities list
    if city not in cities:
        cities.append(city)

# Print the city count to confirm sufficient count
len(cities)
    603
```

## Perform API Calls

```python
# Starting URL for Weather Map API Call
url = "http://api.openweathermap.org/data/2.5/weather?units=Imperial&APPID=" + weather_api_key

# List of city data
city_data = []

# Print to logger
print("Beginning Data Retrieval     ")
print("-----------------------------")

# Create counters
record_count = 1
set_count = 1

# Loop through all the cities in our list
for i, city in enumerate(cities):

    # Group cities in sets of 50 for logging purposes
    if (i % 50 == 0 and i >= 50):
        set_count += 1
        record_count = 0

    # Create endpoint URL with each city
    city_url = url + "&q=" + city

    # Log the url, record, and set numbers
    print("Processing Record %s of Set %s | %s" % (record_count, set_count, city))

    # Add 1 to the record count
    record_count += 1

    # Run an API request for each of the cities
    try:
        # Parse the JSON and retrieve data
        city_weather = requests.get(city_url).json()

        # Parse out the max temp, humidity, and cloudiness
        city_lat = city_weather["coord"]["lat"]
        city_lng = city_weather["coord"]["lon"]
        city_max_temp = city_weather["main"]["temp_max"]
        city_humidity = city_weather["main"]["humidity"]
        city_clouds = city_weather["clouds"]["all"]
        city_wind = city_weather["wind"]["speed"]
        city_country = city_weather["sys"]["country"]
        city_date = city_weather["dt"]

        # Append the City information into city_data list
        city_data.append({"City": city,
                          "Lat": city_lat,
                          "Lng": city_lng,
                          "Max Temp": city_max_temp,
                          "Humidity": city_humidity,
                          "Cloudiness": city_clouds,
                          "Wind Speed": city_wind,
                          "Country": city_country,
                          "Date": city_date})

    # If an error is experienced, skip the city
    except:
        print("City not found. Skipping...")
        pass

# Indicate that Data Loading is complete
print("-----------------------------")
print("Data Retrieval Complete      ")
print("-----------------------------")

Beginning Data Retrieval
-----------------------------
Processing Record 1 of Set 1 | pimentel
Processing Record 2 of Set 1 | victoria
Processing Record 3 of Set 1 | padang
Processing Record 4 of Set 1 | hasaki
Processing Record 5 of Set 1 | kahului
Processing Record 6 of Set 1 | rocha
Processing Record 7 of Set 1 | pangai
Processing Record 8 of Set 1 | amderma
City not found. Skipping...
Processing Record 9 of Set 1 | puerto ayora
Processing Record 10 of Set 1 | mataura
Processing Record 11 of Set 1 | belushya guba
City not found. Skipping...
Processing Record 12 of Set 1 | port alfred
Processing Record 13 of Set 1 | watsa
Processing Record 14 of Set 1 | rosetta
Processing Record 15 of Set 1 | punta arenas
Processing Record 16 of Set 1 | rikitea
Processing Record 17 of Set 1 | ushuaia
Processing Record 18 of Set 1 | bengkulu
Processing Record 19 of Set 1 | ust-nera
Processing Record 20 of Set 1 | qaanaaq
Processing Record 21 of Set 1 | georgetown
Processing Record 22 of Set 1 | uzhur
Processing Record 23 of Set 1 | bluff
Processing Record 24 of Set 1 | busselton
Processing Record 25 of Set 1 | atuona
Processing Record 26 of Set 1 | sitka
Processing Record 27 of Set 1 | makakilo city
Processing Record 28 of Set 1 | tsihombe
City not found. Skipping...
Processing Record 29 of Set 1 | mahebourg
Processing Record 30 of Set 1 | hamilton
Processing Record 31 of Set 1 | at-bashi
Processing Record 32 of Set 1 | chinameca
Processing Record 33 of Set 1 | yershov
Processing Record 34 of Set 1 | cherskiy
Processing Record 35 of Set 1 | saskylakh
Processing Record 36 of Set 1 | sao filipe
Processing Record 37 of Set 1 | jalalabad
Processing Record 38 of Set 1 | albany
Processing Record 39 of Set 1 | ribeira grande
Processing Record 40 of Set 1 | paamiut
Processing Record 41 of Set 1 | carrickfergus
Processing Record 42 of Set 1 | barra do garcas
Processing Record 43 of Set 1 | carnarvon
Processing Record 44 of Set 1 | thompson
Processing Record 45 of Set 1 | meulaboh
Processing Record 46 of Set 1 | kadykchan
City not found. Skipping...
Processing Record 47 of Set 1 | svetlogorsk
Processing Record 48 of Set 1 | tuktoyaktuk
Processing Record 49 of Set 1 | porto novo
Processing Record 50 of Set 1 | saint-augustin
Processing Record 0 of Set 2 | barrow
Processing Record 1 of Set 2 | avarua
Processing Record 2 of Set 2 | saint-junien
Processing Record 3 of Set 2 | taolanaro
City not found. Skipping...
Processing Record 4 of Set 2 | taoudenni
Processing Record 5 of Set 2 | mushie
Processing Record 6 of Set 2 | nanakuli
Processing Record 7 of Set 2 | pevek
Processing Record 8 of Set 2 | tasiilaq
Processing Record 9 of Set 2 | camacupa
Processing Record 10 of Set 2 | airai
Processing Record 11 of Set 2 | harlingen
Processing Record 12 of Set 2 | dunedin
Processing Record 13 of Set 2 | la ronge
Processing Record 14 of Set 2 | san patricio
Processing Record 15 of Set 2 | yellowknife
Processing Record 16 of Set 2 | hermanus
Processing Record 17 of Set 2 | smoky lake
Processing Record 18 of Set 2 | muzquiz
City not found. Skipping...
Processing Record 19 of Set 2 | fortuna
Processing Record 20 of Set 2 | port elizabeth
Processing Record 21 of Set 2 | vaini
Processing Record 22 of Set 2 | kiruna
Processing Record 23 of Set 2 | castro
Processing Record 24 of Set 2 | nkoteng
Processing Record 25 of Set 2 | acapulco
Processing Record 26 of Set 2 | coihaique
Processing Record 27 of Set 2 | bredasdorp
Processing Record 28 of Set 2 | ihosy
Processing Record 29 of Set 2 | yulara
Processing Record 30 of Set 2 | new norfolk
Processing Record 31 of Set 2 | yabelo
Processing Record 32 of Set 2 | kapaa
Processing Record 33 of Set 2 | vasai
Processing Record 34 of Set 2 | yicheng
Processing Record 35 of Set 2 | kasane
Processing Record 36 of Set 2 | grand gaube
Processing Record 37 of Set 2 | sakit
Processing Record 38 of Set 2 | comodoro rivadavia
Processing Record 39 of Set 2 | yerbogachen
Processing Record 40 of Set 2 | hobart
Processing Record 41 of Set 2 | illoqqortoormiut
City not found. Skipping...
Processing Record 42 of Set 2 | palu
Processing Record 43 of Set 2 | nikolskoye
Processing Record 44 of Set 2 | faanui
Processing Record 45 of Set 2 | dubbo
Processing Record 46 of Set 2 | nantucket
Processing Record 47 of Set 2 | mantua
Processing Record 48 of Set 2 | severo-kurilsk
Processing Record 49 of Set 2 | butaritari
Processing Record 0 of Set 3 | kodiak
Processing Record 1 of Set 3 | thinadhoo
Processing Record 2 of Set 3 | lebu
Processing Record 3 of Set 3 | aasiaat
Processing Record 4 of Set 3 | cayenne
Processing Record 5 of Set 3 | bethel
Processing Record 6 of Set 3 | saint-philippe
Processing Record 7 of Set 3 | kavieng
Processing Record 8 of Set 3 | upernavik
Processing Record 9 of Set 3 | lorengau
Processing Record 10 of Set 3 | ormara
Processing Record 11 of Set 3 | geraldton
Processing Record 12 of Set 3 | senanga
Processing Record 13 of Set 3 | portales
Processing Record 14 of Set 3 | jamestown
Processing Record 15 of Set 3 | putina
Processing Record 16 of Set 3 | port moresby
Processing Record 17 of Set 3 | ballina
Processing Record 18 of Set 3 | san cristobal
Processing Record 19 of Set 3 | natal
Processing Record 20 of Set 3 | sogdiondon
City not found. Skipping...
Processing Record 21 of Set 3 | hurricane
Processing Record 22 of Set 3 | khatanga
Processing Record 23 of Set 3 | balashov
Processing Record 24 of Set 3 | safwah
City not found. Skipping...
Processing Record 25 of Set 3 | bushehr
Processing Record 26 of Set 3 | zheleznodorozhnyy
Processing Record 27 of Set 3 | tartagal
Processing Record 28 of Set 3 | hay river
Processing Record 29 of Set 3 | nanortalik
Processing Record 30 of Set 3 | mar del plata
Processing Record 31 of Set 3 | andenes
Processing Record 32 of Set 3 | san benito
Processing Record 33 of Set 3 | vardo
Processing Record 34 of Set 3 | dolinsk
Processing Record 35 of Set 3 | kota
Processing Record 36 of Set 3 | saint george
Processing Record 37 of Set 3 | georgiyevka
Processing Record 38 of Set 3 | flin flon
Processing Record 39 of Set 3 | saint-leu
Processing Record 40 of Set 3 | armeria
Processing Record 41 of Set 3 | ushtobe
Processing Record 42 of Set 3 | mandurah
Processing Record 43 of Set 3 | vigia del fuerte
Processing Record 44 of Set 3 | bargal
City not found. Skipping...
Processing Record 45 of Set 3 | nouadhibou
Processing Record 46 of Set 3 | barentsburg
City not found. Skipping...
Processing Record 47 of Set 3 | salinopolis
Processing Record 48 of Set 3 | kenai
Processing Record 49 of Set 3 | norman wells
Processing Record 0 of Set 4 | pemangkat
Processing Record 1 of Set 4 | port hardy
Processing Record 2 of Set 4 | attawapiskat
City not found. Skipping...
Processing Record 3 of Set 4 | dunmore east
Processing Record 4 of Set 4 | kaitangata
Processing Record 5 of Set 4 | atasu
Processing Record 6 of Set 4 | narsaq
Processing Record 7 of Set 4 | jalu
Processing Record 8 of Set 4 | cotonou
Processing Record 9 of Set 4 | deputatskiy
Processing Record 10 of Set 4 | champerico
Processing Record 11 of Set 4 | morros
Processing Record 12 of Set 4 | aurangabad
Processing Record 13 of Set 4 | nueva loja
Processing Record 14 of Set 4 | surt
Processing Record 15 of Set 4 | clarence town
Processing Record 16 of Set 4 | longyearbyen
Processing Record 17 of Set 4 | salalah
Processing Record 18 of Set 4 | necochea
Processing Record 19 of Set 4 | provideniya
Processing Record 20 of Set 4 | blantyre
Processing Record 21 of Set 4 | isangel
Processing Record 22 of Set 4 | seymchan
Processing Record 23 of Set 4 | inderborskiy
City not found. Skipping...
Processing Record 24 of Set 4 | lolua
City not found. Skipping...
Processing Record 25 of Set 4 | teneguiban
City not found. Skipping...
Processing Record 26 of Set 4 | cape town
Processing Record 27 of Set 4 | eregli
Processing Record 28 of Set 4 | constitucion
Processing Record 29 of Set 4 | falealupo
City not found. Skipping...
Processing Record 30 of Set 4 | cuajinicuilapa
Processing Record 31 of Set 4 | hammerfest
Processing Record 32 of Set 4 | zhaotong
Processing Record 33 of Set 4 | grajau
Processing Record 34 of Set 4 | esperance
Processing Record 35 of Set 4 | gat
Processing Record 36 of Set 4 | dikson
Processing Record 37 of Set 4 | bhadrak
Processing Record 38 of Set 4 | tres picos
Processing Record 39 of Set 4 | saint-francois
Processing Record 40 of Set 4 | bubaque
Processing Record 41 of Set 4 | mackay
Processing Record 42 of Set 4 | kirakira
Processing Record 43 of Set 4 | banda aceh
Processing Record 44 of Set 4 | bang saphan
Processing Record 45 of Set 4 | chuy
Processing Record 46 of Set 4 | san juan
Processing Record 47 of Set 4 | waingapu
Processing Record 48 of Set 4 | santa isabel
Processing Record 49 of Set 4 | turukhansk
Processing Record 0 of Set 5 | saurimo
Processing Record 1 of Set 5 | ambon
Processing Record 2 of Set 5 | ambulu
Processing Record 3 of Set 5 | olafsvik
Processing Record 4 of Set 5 | ahipara
Processing Record 5 of Set 5 | talnakh
Processing Record 6 of Set 5 | beringovskiy
Processing Record 7 of Set 5 | sobolevo
Processing Record 8 of Set 5 | tateyama
Processing Record 9 of Set 5 | shambu
Processing Record 10 of Set 5 | dingle
Processing Record 11 of Set 5 | nizhneyansk
City not found. Skipping...
Processing Record 12 of Set 5 | carlsbad
Processing Record 13 of Set 5 | hithadhoo
Processing Record 14 of Set 5 | ostrovnoy
Processing Record 15 of Set 5 | namatanai
Processing Record 16 of Set 5 | san juan de los morros
Processing Record 17 of Set 5 | sofiysk
City not found. Skipping...
Processing Record 18 of Set 5 | namibe
Processing Record 19 of Set 5 | husavik
Processing Record 20 of Set 5 | rio grande
Processing Record 21 of Set 5 | ilulissat
Processing Record 22 of Set 5 | vaitupu
City not found. Skipping...
Processing Record 23 of Set 5 | tubuala
Processing Record 24 of Set 5 | grindavik
Processing Record 25 of Set 5 | faya
Processing Record 26 of Set 5 | maridi
Processing Record 27 of Set 5 | laguna
Processing Record 28 of Set 5 | alta floresta
Processing Record 29 of Set 5 | marathon
Processing Record 30 of Set 5 | arraial do cabo
Processing Record 31 of Set 5 | skalistyy
City not found. Skipping...
Processing Record 32 of Set 5 | inndyr
Processing Record 33 of Set 5 | kupang
Processing Record 34 of Set 5 | fairbanks
Processing Record 35 of Set 5 | tura
Processing Record 36 of Set 5 | wagar
Processing Record 37 of Set 5 | saint-joseph
Processing Record 38 of Set 5 | bandarbeyla
Processing Record 39 of Set 5 | santo tomas
Processing Record 40 of Set 5 | nhulunbuy
Processing Record 41 of Set 5 | date
Processing Record 42 of Set 5 | viligili
City not found. Skipping...
Processing Record 43 of Set 5 | cazaje
City not found. Skipping...
Processing Record 44 of Set 5 | saldanha
Processing Record 45 of Set 5 | nishihara
Processing Record 46 of Set 5 | port hedland
Processing Record 47 of Set 5 | temaraia
City not found. Skipping...
Processing Record 48 of Set 5 | gary
Processing Record 49 of Set 5 | uvinza
Processing Record 0 of Set 6 | naze
Processing Record 1 of Set 6 | muros
Processing Record 2 of Set 6 | pouembout
Processing Record 3 of Set 6 | hilo
Processing Record 4 of Set 6 | stepnogorsk
Processing Record 5 of Set 6 | dien bien
City not found. Skipping...
Processing Record 6 of Set 6 | conde
Processing Record 7 of Set 6 | sept-iles
Processing Record 8 of Set 6 | sur
Processing Record 9 of Set 6 | mangrol
Processing Record 10 of Set 6 | tilichiki
Processing Record 11 of Set 6 | haines junction
Processing Record 12 of Set 6 | omboue
Processing Record 13 of Set 6 | baykit
Processing Record 14 of Set 6 | bedesa
Processing Record 15 of Set 6 | iberia
Processing Record 16 of Set 6 | santa vitoria do palmar
Processing Record 17 of Set 6 | cabo san lucas
Processing Record 18 of Set 6 | olot
Processing Record 19 of Set 6 | egvekinot
Processing Record 20 of Set 6 | bambamarca
Processing Record 21 of Set 6 | kano
Processing Record 22 of Set 6 | port macquarie
Processing Record 23 of Set 6 | vila franca do campo
Processing Record 24 of Set 6 | saint-pierre
Processing Record 25 of Set 6 | encruzilhada do sul
Processing Record 26 of Set 6 | saint anthony
Processing Record 27 of Set 6 | meadow lake
Processing Record 28 of Set 6 | tuatapere
Processing Record 29 of Set 6 | himatangi
Processing Record 30 of Set 6 | syracuse
Processing Record 31 of Set 6 | kamenskoye
City not found. Skipping...
Processing Record 32 of Set 6 | lom sak
Processing Record 33 of Set 6 | kununurra
Processing Record 34 of Set 6 | kvitok
Processing Record 35 of Set 6 | fairlie
Processing Record 36 of Set 6 | mitchell
Processing Record 37 of Set 6 | baturite
Processing Record 38 of Set 6 | puerto del rosario
Processing Record 39 of Set 6 | pisco
Processing Record 40 of Set 6 | vila velha
Processing Record 41 of Set 6 | labutta
City not found. Skipping...
Processing Record 42 of Set 6 | nome
Processing Record 43 of Set 6 | mamallapuram
Processing Record 44 of Set 6 | macaboboni
City not found. Skipping...
Processing Record 45 of Set 6 | yumen
Processing Record 46 of Set 6 | guerrero negro
Processing Record 47 of Set 6 | berdigestyakh
Processing Record 48 of Set 6 | hearst
Processing Record 49 of Set 6 | san rafael
Processing Record 0 of Set 7 | kaka
Processing Record 1 of Set 7 | chabahar
Processing Record 2 of Set 7 | dolores
Processing Record 3 of Set 7 | tiksi
Processing Record 4 of Set 7 | ardalstangen
Processing Record 5 of Set 7 | chokurdakh
Processing Record 6 of Set 7 | saint-georges
Processing Record 7 of Set 7 | leningradskiy
Processing Record 8 of Set 7 | matamoros
Processing Record 9 of Set 7 | saint-denis
Processing Record 10 of Set 7 | rawson
Processing Record 11 of Set 7 | aripuana
Processing Record 12 of Set 7 | murgab
Processing Record 13 of Set 7 | tuy hoa
Processing Record 14 of Set 7 | auriflama
Processing Record 15 of Set 7 | kampot
Processing Record 16 of Set 7 | college
Processing Record 17 of Set 7 | atikokan
Processing Record 18 of Set 7 | zhigansk
Processing Record 19 of Set 7 | portland
Processing Record 20 of Set 7 | coahuayana
Processing Record 21 of Set 7 | brekstad
Processing Record 22 of Set 7 | port lincoln
Processing Record 23 of Set 7 | vestmannaeyjar
Processing Record 24 of Set 7 | diu
Processing Record 25 of Set 7 | mount gambier
Processing Record 26 of Set 7 | havoysund
Processing Record 27 of Set 7 | harper
Processing Record 28 of Set 7 | oktyabrskoye
Processing Record 29 of Set 7 | micheweni
Processing Record 30 of Set 7 | salina cruz
Processing Record 31 of Set 7 | ukiah
Processing Record 32 of Set 7 | hare bay
Processing Record 33 of Set 7 | salta
Processing Record 34 of Set 7 | poum
Processing Record 35 of Set 7 | myitkyina
Processing Record 36 of Set 7 | businga
Processing Record 37 of Set 7 | shuyskoye
Processing Record 38 of Set 7 | kulhudhuffushi
Processing Record 39 of Set 7 | port-de-bouc
Processing Record 40 of Set 7 | saint-felicien
Processing Record 41 of Set 7 | urdzhar
City not found. Skipping...
Processing Record 42 of Set 7 | mount isa
Processing Record 43 of Set 7 | kincardine
Processing Record 44 of Set 7 | torbat-e jam
Processing Record 45 of Set 7 | citrus park
Processing Record 46 of Set 7 | palabuhanratu
City not found. Skipping...
Processing Record 47 of Set 7 | lakatoro
Processing Record 48 of Set 7 | biak
Processing Record 49 of Set 7 | den helder
Processing Record 0 of Set 8 | porto walter
Processing Record 1 of Set 8 | chazuta
Processing Record 2 of Set 8 | dorado
Processing Record 3 of Set 8 | klaksvik
Processing Record 4 of Set 8 | alofi
Processing Record 5 of Set 8 | shatsk
Processing Record 6 of Set 8 | whitehorse
Processing Record 7 of Set 8 | moissala
Processing Record 8 of Set 8 | mumford
Processing Record 9 of Set 8 | tadine
Processing Record 10 of Set 8 | olinda
Processing Record 11 of Set 8 | gizo
Processing Record 12 of Set 8 | tete
Processing Record 13 of Set 8 | amarante
Processing Record 14 of Set 8 | jacareacanga
Processing Record 15 of Set 8 | sona
Processing Record 16 of Set 8 | hovd
Processing Record 17 of Set 8 | chicama
Processing Record 18 of Set 8 | erzin
Processing Record 19 of Set 8 | kuche
City not found. Skipping...
Processing Record 20 of Set 8 | chippewa falls
Processing Record 21 of Set 8 | amahai
Processing Record 22 of Set 8 | artyom
Processing Record 23 of Set 8 | raudeberg
Processing Record 24 of Set 8 | elk city
Processing Record 25 of Set 8 | mocambique
City not found. Skipping...
Processing Record 26 of Set 8 | bambanglipuro
Processing Record 27 of Set 8 | paita
Processing Record 28 of Set 8 | mongomo
Processing Record 29 of Set 8 | hunza
City not found. Skipping...
Processing Record 30 of Set 8 | bow island
Processing Record 31 of Set 8 | moerai
Processing Record 32 of Set 8 | xichang
Processing Record 33 of Set 8 | sakhnovshchyna
Processing Record 34 of Set 8 | northam
Processing Record 35 of Set 8 | santa rosa
Processing Record 36 of Set 8 | severo-yeniseyskiy
Processing Record 37 of Set 8 | madera
Processing Record 38 of Set 8 | rizhao
Processing Record 39 of Set 8 | okhotsk
Processing Record 40 of Set 8 | bani
Processing Record 41 of Set 8 | awjilah
Processing Record 42 of Set 8 | miles city
Processing Record 43 of Set 8 | ulaanbaatar
Processing Record 44 of Set 8 | lagoa
Processing Record 45 of Set 8 | syasstroy
Processing Record 46 of Set 8 | honiara
Processing Record 47 of Set 8 | east london
Processing Record 48 of Set 8 | karakol
Processing Record 49 of Set 8 | yeletskiy
City not found. Skipping...
Processing Record 0 of Set 9 | andros town
Processing Record 1 of Set 9 | te anau
Processing Record 2 of Set 9 | coquimbo
Processing Record 3 of Set 9 | pangnirtung
Processing Record 4 of Set 9 | jumla
Processing Record 5 of Set 9 | souillac
Processing Record 6 of Set 9 | uige
Processing Record 7 of Set 9 | tolaga bay
Processing Record 8 of Set 9 | buzovna
Processing Record 9 of Set 9 | lompoc
Processing Record 10 of Set 9 | fort saint john
City not found. Skipping...
Processing Record 11 of Set 9 | lasa
Processing Record 12 of Set 9 | marcona
City not found. Skipping...
Processing Record 13 of Set 9 | ossora
Processing Record 14 of Set 9 | adrar
Processing Record 15 of Set 9 | peshawar
Processing Record 16 of Set 9 | el alto
Processing Record 17 of Set 9 | bambous virieux
Processing Record 18 of Set 9 | iqaluit
Processing Record 19 of Set 9 | bukachacha
Processing Record 20 of Set 9 | mys shmidta
City not found. Skipping...
Processing Record 21 of Set 9 | kholodnyy
Processing Record 22 of Set 9 | thatta
Processing Record 23 of Set 9 | chernyshevskiy
Processing Record 24 of Set 9 | khash
Processing Record 25 of Set 9 | senno
Processing Record 26 of Set 9 | penzance
Processing Record 27 of Set 9 | burica
City not found. Skipping...
Processing Record 28 of Set 9 | imeni babushkina
Processing Record 29 of Set 9 | lubumbashi
Processing Record 30 of Set 9 | chumikan
Processing Record 31 of Set 9 | aswan
Processing Record 32 of Set 9 | torbay
Processing Record 33 of Set 9 | duluth
Processing Record 34 of Set 9 | bandrele
Processing Record 35 of Set 9 | belaya gora
Processing Record 36 of Set 9 | takehara
Processing Record 37 of Set 9 | vieques
Processing Record 38 of Set 9 | labuhan
Processing Record 39 of Set 9 | hendijan
City not found. Skipping...
Processing Record 40 of Set 9 | dandong
Processing Record 41 of Set 9 | vichy
Processing Record 42 of Set 9 | sarapulka
Processing Record 43 of Set 9 | arandis
Processing Record 44 of Set 9 | bilma
Processing Record 45 of Set 9 | quatre cocos
Processing Record 46 of Set 9 | brae
Processing Record 47 of Set 9 | rio tercero
Processing Record 48 of Set 9 | manjacaze
Processing Record 49 of Set 9 | tumannyy
City not found. Skipping...
Processing Record 0 of Set 10 | shubarkuduk
Processing Record 1 of Set 10 | gwembe
Processing Record 2 of Set 10 | riyadh
Processing Record 3 of Set 10 | muisne
Processing Record 4 of Set 10 | touros
Processing Record 5 of Set 10 | tineo
Processing Record 6 of Set 10 | samalaeulu
City not found. Skipping...
Processing Record 7 of Set 10 | aklavik
Processing Record 8 of Set 10 | soyo
Processing Record 9 of Set 10 | le vauclin
Processing Record 10 of Set 10 | ambah
Processing Record 11 of Set 10 | pizarro
Processing Record 12 of Set 10 | ghotki
Processing Record 13 of Set 10 | grand island
Processing Record 14 of Set 10 | cockburn town
Processing Record 15 of Set 10 | capelinha
Processing Record 16 of Set 10 | laela
Processing Record 17 of Set 10 | risod
Processing Record 18 of Set 10 | meybod
Processing Record 19 of Set 10 | sisimiut
Processing Record 20 of Set 10 | maceio
Processing Record 21 of Set 10 | nicoya
Processing Record 22 of Set 10 | sorong
Processing Record 23 of Set 10 | shimoda
Processing Record 24 of Set 10 | constantine
Processing Record 25 of Set 10 | los llanos de aridane
Processing Record 26 of Set 10 | broome
Processing Record 27 of Set 10 | avila
Processing Record 28 of Set 10 | sorvag
City not found. Skipping...
Processing Record 29 of Set 10 | abu samrah
Processing Record 30 of Set 10 | wahran
City not found. Skipping...
Processing Record 31 of Set 10 | vostok
Processing Record 32 of Set 10 | gao
Processing Record 33 of Set 10 | bolshaya sosnova
Processing Record 34 of Set 10 | oranjemund
Processing Record 35 of Set 10 | farah
Processing Record 36 of Set 10 | westport
Processing Record 37 of Set 10 | port-cartier
Processing Record 38 of Set 10 | waipawa
Processing Record 39 of Set 10 | shingu
Processing Record 40 of Set 10 | papantla
City not found. Skipping...
Processing Record 41 of Set 10 | hualmay
Processing Record 42 of Set 10 | nuevo progreso
Processing Record 43 of Set 10 | genhe
Processing Record 44 of Set 10 | koumac
Processing Record 45 of Set 10 | paranavai
Processing Record 46 of Set 10 | terralba
Processing Record 47 of Set 10 | hihifo
City not found. Skipping...
Processing Record 48 of Set 10 | berlevag
Processing Record 49 of Set 10 | hambantota
Processing Record 0 of Set 11 | kalabugao
City not found. Skipping...
Processing Record 1 of Set 11 | council bluffs
Processing Record 2 of Set 11 | bereda
Processing Record 3 of Set 11 | inhambane
Processing Record 4 of Set 11 | sistranda
Processing Record 5 of Set 11 | nakhon thai
Processing Record 6 of Set 11 | moussoro
Processing Record 7 of Set 11 | mnogovershinnyy
Processing Record 8 of Set 11 | hami
Processing Record 9 of Set 11 | santa helena de goias
Processing Record 10 of Set 11 | praia da vitoria
Processing Record 11 of Set 11 | labrea
Processing Record 12 of Set 11 | chiang khong
Processing Record 13 of Set 11 | prescott
Processing Record 14 of Set 11 | noumea
Processing Record 15 of Set 11 | agadir
Processing Record 16 of Set 11 | vanimo
Processing Record 17 of Set 11 | pallasovka
Processing Record 18 of Set 11 | bria
Processing Record 19 of Set 11 | galveston
Processing Record 20 of Set 11 | ponta do sol
Processing Record 21 of Set 11 | aguimes
Processing Record 22 of Set 11 | kichmengskiy gorodok
Processing Record 23 of Set 11 | mama
Processing Record 24 of Set 11 | laem sing
Processing Record 25 of Set 11 | hollister
Processing Record 26 of Set 11 | kieta
Processing Record 27 of Set 11 | petropavlovsk-kamchatskiy
Processing Record 28 of Set 11 | clonakilty
Processing Record 29 of Set 11 | nalut
Processing Record 30 of Set 11 | margate
Processing Record 31 of Set 11 | watertown
Processing Record 32 of Set 11 | buala
Processing Record 33 of Set 11 | arkhara
Processing Record 34 of Set 11 | quang ngai
Processing Record 35 of Set 11 | mecca
Processing Record 36 of Set 11 | cidreira
Processing Record 37 of Set 11 | tutoia
Processing Record 38 of Set 11 | greece
Processing Record 39 of Set 11 | vana-voidu
City not found. Skipping...
Processing Record 40 of Set 11 | linchuan
City not found. Skipping...
Processing Record 41 of Set 11 | sambava
Processing Record 42 of Set 11 | pailon
Processing Record 43 of Set 11 | mendahara
City not found. Skipping...
Processing Record 44 of Set 11 | moron
Processing Record 45 of Set 11 | kangaatsiaq
Processing Record 46 of Set 11 | kysyl-syr
Processing Record 47 of Set 11 | kurchum
Processing Record 48 of Set 11 | byron bay
Processing Record 49 of Set 11 | palmer
Processing Record 0 of Set 12 | luderitz
Processing Record 1 of Set 12 | kurumkan
Processing Record 2 of Set 12 | cap malheureux
Processing Record 3 of Set 12 | kaa-khem
Processing Record 4 of Set 12 | duki
Processing Record 5 of Set 12 | ambilobe
Processing Record 6 of Set 12 | louisbourg
City not found. Skipping...
Processing Record 7 of Set 12 | oriximina
Processing Record 8 of Set 12 | ca mau
Processing Record 9 of Set 12 | busilac
Processing Record 10 of Set 12 | vanavara
Processing Record 11 of Set 12 | burgdorf
Processing Record 12 of Set 12 | aksarka
Processing Record 13 of Set 12 | narrabri
Processing Record 14 of Set 12 | umzimvubu
City not found. Skipping...
Processing Record 15 of Set 12 | adeje
Processing Record 16 of Set 12 | simpang
Processing Record 17 of Set 12 | athabasca
Processing Record 18 of Set 12 | prince rupert
Processing Record 19 of Set 12 | bilibino
Processing Record 20 of Set 12 | sayyan
Processing Record 21 of Set 12 | figline valdarno
Processing Record 22 of Set 12 | srednekolymsk
Processing Record 23 of Set 12 | kapit
Processing Record 24 of Set 12 | erenhot
Processing Record 25 of Set 12 | zachagansk
City not found. Skipping...
Processing Record 26 of Set 12 | toftir
City not found. Skipping...
Processing Record 27 of Set 12 | agdam
Processing Record 28 of Set 12 | indianola
Processing Record 29 of Set 12 | honiton
Processing Record 30 of Set 12 | batemans bay
Processing Record 31 of Set 12 | namtsy
Processing Record 32 of Set 12 | bonoua
Processing Record 33 of Set 12 | aracati
Processing Record 34 of Set 12 | mareeba
Processing Record 35 of Set 12 | veraval
Processing Record 36 of Set 12 | sioux lookout
Processing Record 37 of Set 12 | bracebridge
Processing Record 38 of Set 12 | lakhimpur
Processing Record 39 of Set 12 | kruisfontein
Processing Record 40 of Set 12 | laurel
Processing Record 41 of Set 12 | tynda
Processing Record 42 of Set 12 | chipata
Processing Record 43 of Set 12 | linjiang
Processing Record 44 of Set 12 | zhuanghe
Processing Record 45 of Set 12 | samusu
City not found. Skipping...
Processing Record 46 of Set 12 | spoleto
Processing Record 47 of Set 12 | sabha
Processing Record 48 of Set 12 | ingham
Processing Record 49 of Set 12 | sakaraha
Processing Record 0 of Set 13 | port blair
Processing Record 1 of Set 13 | fort nelson
Processing Record 2 of Set 13 | bandraboua
-----------------------------
Data Retrieval Complete
-----------------------------

# Convert array of JSONs into Pandas DataFrame
city_data_pd = pd.DataFrame(city_data)

# Show Record Count
city_data_pd.count()


    City          550
    Lat           550
    Lng           550
    Max Temp      550
    Humidity      550
    Cloudiness    550
    Wind Speed    550
    Country       550
    Date          550
    dtype: int64


# Display the City Data Frame
city_data_pd.head()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>City</th>
      <th>Lat</th>
      <th>Lng</th>
      <th>Max Temp</th>
      <th>Humidity</th>
      <th>Cloudiness</th>
      <th>Wind Speed</th>
      <th>Country</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>pimentel</td>
      <td>-6.84</td>
      <td>-79.93</td>
      <td>66.20</td>
      <td>29</td>
      <td>75</td>
      <td>5.82</td>
      <td>PE</td>
      <td>1585764415</td>
    </tr>
    <tr>
      <th>1</th>
      <td>victoria</td>
      <td>22.29</td>
      <td>114.16</td>
      <td>69.01</td>
      <td>88</td>
      <td>40</td>
      <td>18.34</td>
      <td>HK</td>
      <td>1585764288</td>
    </tr>
    <tr>
      <th>2</th>
      <td>padang</td>
      <td>-0.95</td>
      <td>100.35</td>
      <td>79.90</td>
      <td>75</td>
      <td>99</td>
      <td>1.63</td>
      <td>ID</td>
      <td>1585764115</td>
    </tr>
    <tr>
      <th>3</th>
      <td>hasaki</td>
      <td>35.73</td>
      <td>140.83</td>
      <td>55.00</td>
      <td>100</td>
      <td>75</td>
      <td>4.70</td>
      <td>JP</td>
      <td>1585764415</td>
    </tr>
    <tr>
      <th>4</th>
      <td>kahului</td>
      <td>20.89</td>
      <td>-156.47</td>
      <td>70.00</td>
      <td>88</td>
      <td>1</td>
      <td>7.63</td>
      <td>US</td>
      <td>1585764415</td>
    </tr>
  </tbody>
</table>
</div>



## Inspect the data and remove the cities where the humidity > 100%.
----
Skip this step if there are no cities that have humidity > 100%.


```python
city_data_pd.describe()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Lat</th>
      <th>Lng</th>
      <th>Max Temp</th>
      <th>Humidity</th>
      <th>Cloudiness</th>
      <th>Wind Speed</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>550.000000</td>
      <td>550.000000</td>
      <td>550.000000</td>
      <td>550.000000</td>
      <td>550.000000</td>
      <td>550.000000</td>
      <td>5.500000e+02</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>19.973545</td>
      <td>17.124400</td>
      <td>58.331400</td>
      <td>67.890909</td>
      <td>52.141818</td>
      <td>8.544800</td>
      <td>1.585764e+09</td>
    </tr>
    <tr>
      <th>std</th>
      <td>33.284840</td>
      <td>91.595451</td>
      <td>25.795297</td>
      <td>20.864881</td>
      <td>35.766469</td>
      <td>6.078869</td>
      <td>5.539674e+01</td>
    </tr>
    <tr>
      <th>min</th>
      <td>-54.800000</td>
      <td>-179.170000</td>
      <td>-11.340000</td>
      <td>9.000000</td>
      <td>0.000000</td>
      <td>0.160000</td>
      <td>1.585764e+09</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>-8.077500</td>
      <td>-64.627500</td>
      <td>42.800000</td>
      <td>55.000000</td>
      <td>20.000000</td>
      <td>4.525000</td>
      <td>1.585764e+09</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>23.630000</td>
      <td>19.635000</td>
      <td>64.940000</td>
      <td>72.000000</td>
      <td>57.000000</td>
      <td>7.325000</td>
      <td>1.585764e+09</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>48.672500</td>
      <td>97.350000</td>
      <td>78.800000</td>
      <td>83.000000</td>
      <td>86.750000</td>
      <td>11.410000</td>
      <td>1.585764e+09</td>
    </tr>
    <tr>
      <th>max</th>
      <td>78.220000</td>
      <td>179.320000</td>
      <td>102.200000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>46.080000</td>
      <td>1.585764e+09</td>
    </tr>
  </tbody>
</table>
</div>

```python
#  Get the indices of cities that have humidity over 100%.
dirty_city_data = city_data_pd[(city_data_pd["Humidity"] > 100)].index

dirty_city_data

    Int64Index([], dtype='int64')
```

```python
# Make a new DataFrame equal to the city data to drop all humidity outliers by index.
# Passing "inplace=False" will make a copy of the city_data DataFrame, which we call "clean_city_data".
clean_city_data = city_data_pd.drop(dirty_city_data, inplace=False)
clean_city_data.head()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>City</th>
      <th>Lat</th>
      <th>Lng</th>
      <th>Max Temp</th>
      <th>Humidity</th>
      <th>Cloudiness</th>
      <th>Wind Speed</th>
      <th>Country</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>pimentel</td>
      <td>-6.84</td>
      <td>-79.93</td>
      <td>66.20</td>
      <td>29</td>
      <td>75</td>
      <td>5.82</td>
      <td>PE</td>
      <td>1585764415</td>
    </tr>
    <tr>
      <th>1</th>
      <td>victoria</td>
      <td>22.29</td>
      <td>114.16</td>
      <td>69.01</td>
      <td>88</td>
      <td>40</td>
      <td>18.34</td>
      <td>HK</td>
      <td>1585764288</td>
    </tr>
    <tr>
      <th>2</th>
      <td>padang</td>
      <td>-0.95</td>
      <td>100.35</td>
      <td>79.90</td>
      <td>75</td>
      <td>99</td>
      <td>1.63</td>
      <td>ID</td>
      <td>1585764115</td>
    </tr>
    <tr>
      <th>3</th>
      <td>hasaki</td>
      <td>35.73</td>
      <td>140.83</td>
      <td>55.00</td>
      <td>100</td>
      <td>75</td>
      <td>4.70</td>
      <td>JP</td>
      <td>1585764415</td>
    </tr>
    <tr>
      <th>4</th>
      <td>kahului</td>
      <td>20.89</td>
      <td>-156.47</td>
      <td>70.00</td>
      <td>88</td>
      <td>1</td>
      <td>7.63</td>
      <td>US</td>
      <td>1585764415</td>
    </tr>
  </tbody>
</table>
</div>

```python
# Extract relevant fields from the data frame
lats = clean_city_data["Lat"]
max_temps = clean_city_data["Max Temp"]
humidity = clean_city_data["Humidity"]
cloudiness = clean_city_data["Cloudiness"]
wind_speed = clean_city_data["Wind Speed"]

# Export the City_Data into a csv
clean_city_data.to_csv(output_data_file, index_label="City_ID")
```

## Latitude vs. Temperature Plot

```python
# Build scatter plot for latitude vs. temperature
plt.scatter(lats,
            max_temps,
            edgecolor="black", linewidths=1, marker="o",
            alpha=0.8, label="Cities")

# Incorporate the other graph properties
plt.title("City Latitude vs. Max Temperature (%s)" % time.strftime("%x"))
plt.ylabel("Max Temperature (F)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the figure
plt.savefig("output_data/Fig1.png")

# Show plot
plt.show()
```

![png](output_data/Fig1.png)

## Latitude vs. Humidity Plot

```python
# Build the scatter plots for latitude vs. humidity
plt.scatter(lats,
            humidity,
            edgecolor="black", linewidths=1, marker="o",
            alpha=0.8, label="Cities")

# Incorporate the other graph properties
plt.title("City Latitude vs. Humidity (%s)" % time.strftime("%x"))
plt.ylabel("Humidity (%)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the figure
plt.savefig("output_data/Fig2.png")

# Show plot
plt.show()
```

![png](output_data/Fig2.png)

## Latitude vs. Cloudiness Plot

```python
# Build the scatter plots for latitude vs. cloudiness
plt.scatter(lats,
            cloudiness,
            edgecolor="black", linewidths=1, marker="o",
            alpha=0.8, label="Cities")

# Incorporate the other graph properties
plt.title("City Latitude vs. Cloudiness (%s)" % time.strftime("%x"))
plt.ylabel("Cloudiness (%)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the figure
plt.savefig("output_data/Fig3.png")

# Show plot
plt.show()
```

![png](output_data/Fig3.png)

## Latitude vs. Wind Speed Plot

```python
# Build the scatter plots for latitude vs. wind speed
plt.scatter(lats,
            wind_speed,
            edgecolor="black", linewidths=1, marker="o",
            alpha=0.8, label="Cities")

# Incorporate the other graph properties
plt.title("City Latitude vs. Wind Speed (%s)" % time.strftime("%x"))
plt.ylabel("Wind Speed (mph)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the figure
plt.savefig("output_data/Fig4.png")

# Show plot
plt.show()
```

![png](output_data/Fig4.png)
