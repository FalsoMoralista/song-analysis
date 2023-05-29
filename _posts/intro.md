---
title: 'Introduction'
excerpt: 'Throughout the EXA844 course lectures we were able to learn some of the core aspects regarding the web programming paradigm, specifically those in which concerns the foundations of front and back-end programming.'
coverImage: '/assets/blog/dynamic-routing/cover2.JPG'
date: '2022-05-22T05:35:07.322Z'
author:
  name: Luciano Dourado
  picture: '/assets/blog/authors/author.JPG'
ogImage:
  url: '/assets/blog/dynamic-routing/cover2.jpg'
---

Throughout the EXA844 course lectures we were able to learn some of the core aspects regarding the web programming paradigm, specifically those in which concerns the foundations of front and back-end programming. 

The course is divided into 3 major sections that composes the core concepts required to develop a basic web project. In each of these stages we are inquired to develop a component of of our project. The first step is composed by the web crawler, from which we use to acquire the data, whereas the second implies processing and making the data available throughout an API, and the third stage consists of displaying throughout a web application. 

## Application

As the primary data source we aimed to acquire the most popular songs lyrics throughout the years in order to try analyzing the "cultural decadency" of the brazilian popular music (MPB) throughout the years. This phenomenon has been identified and criticized by many intellectuals before and has been present in many kinds of cultural manifestations but I would risk to say that most significantly in entertainment. This phenomenon is one of the most significant symptoms of the media massification over what 
would may be considered as the major piece of the market, which is (refered as) the "popular" scenario. 

I believe that makes sense that if you would consider to promote culture as a product - I guess that doesn't hurt to say, with the intent to profit - it would be better that the consumers were interested in the most unsophisticated products as possible, therefore not only would be more easy to deliver but cheaper, therefore more profitable. 

Another way to look at that is to consider music from the perspective of cultural manifestations, such as means to protest against repression. Periods such as the years of dictatorial goverments that followed the development of the brazilian popular music as it was in the golden years, or the manifestation of the african-americans against discrimination through Jazz music, illustrates my perspective that sophistication becomes a natural, self-driving force that we humans pursuit, as a weapon to express either the indignations of our suffering soul or the preciosity about the simple things that makes life more meaningful and passage through suffering less worse.

With that hypothesis we aimed at analyzing the lyrics complexity throughout the years, therefore we assessed two complexity measures: Entropy based complexity and Lexical complexity.

## Data Acquisition

Our data was collected from the www.maistocadas.mus.br website, from which we obtained a list of the top-100 played music for every year between 1950 and 2021 (around 7.000 entries). From that we were able to get (song title, artist name, rank position - most listened songs, and release year). This allowed us to cross the data obtained with the MusixMatch (MXM) Dataset - Million Song Dataset (MSD) (http://millionsongdataset.com/musixmatch/) from which we were able to get a list of song names, and lyrics in the bag-of-words format. Considering the list of top-100 songs by year we were able to search for the corresponding matches in the 237,662 tracks from the MXM Dataset.

In order to search for the correspondent matches between those datasets, considering the possibilities of inconsistencies between song or artist names, we addressed a similarity based search approach, by computing the cosine similarity between song titles. This approach enabled to find the subset of songs found in the MXM dataset, from which we later used to filter brazilian songs.

In order to filter the corresponding brazilian songs we searched for matches regarding lyrics words in a portuguese dictionary, from which if a certain treshold of matches was attended we considered the song as brazilian. 

After all, e.g., filtering out from the songs found in the MXM dataset foreing songs, instrumental songs and possibly duplicates, our dataset ended, unfortunately, with around 300 samples from which enabled to conduct our analysis. 