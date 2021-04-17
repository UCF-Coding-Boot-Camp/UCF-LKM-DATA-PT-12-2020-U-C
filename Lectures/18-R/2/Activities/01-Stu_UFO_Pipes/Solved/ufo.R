library(tidyverse)

ufo <- read_csv("ufo.csv")

ufo %>% head()

ufo %>% count()

length(ufo$state %>% unique())


ufo %>% group_by(state) %>% summarise(duration=mean(`duration (seconds)`)) %>% arrange(desc(duration))

ufo %>% 
  group_by(state) %>% 
  summarise(avg.duration = mean(`duration (seconds)`)) %>% 
  arrange(desc(avg.duration)) 

ufo %>% 
  group_by(state) %>% 
  summarise(number.sightings = n()) %>% 
  arrange(desc(number.sightings))

ufo %>%  head()

ufo %>% 
  group_by(shape) %>% 
  summarise(shape.count = n()) %>% 
  arrange(desc(shape.count))

