---
title: "Refatoração de MVVM-C no Core Banking"
architecture: "MVVM-C, Clean Architecture"
tags: "Swift, MVVM-C, Core Banking, Liderança Técnica"
date: "2023-01-01"
published: true
---

## O Desafio
Descreva a dor de cabeça do código legado.

## A Solução (Sua Boa Prática)
Implementamos o padrão MVVM-C (Model-View-ViewModel-Coordinator) para desacoplar a lógica de navegação. Isso permitiu o aumento da cobertura de **Testes Unitários** com XCTest e facilitou a **mentoria** dos juniores, pois o código ficou mais previsível (Princípio da Manutenibilidade).