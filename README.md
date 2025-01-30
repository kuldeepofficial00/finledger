# 💰 FinLedger — B2B Invoicing & Financial Operations Portal

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat&logo=docker&logoColor=white)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**FinLedger** is a secure, enterprise-grade B2B invoicing, accounts receivable, and cashflow ledger platform designed for high-volume transactions and multi-entity operations.

## 🌟 Core Architectural Features
- **Deterministic Financial Math:** Zero-rounding error multi-currency itemization engine
- **Immutable Audit Trail:** Strict SOC2-ready ledger audit entries tracking every transaction
- **Multi-Tenant Security:** Tenant scoping across companies, user roles, and clients
- **Continuous Delivery:** Containerized Docker Compose orchestration with health probes

## 🚀 API Endpoint Reference
| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register enterprise tenant & finance manager | Public |
| `GET` | `/api/v1/clients` | Retrieve all accounts receivable client accounts | Bearer JWT |
| `POST` | `/api/v1/clients` | Onboard new B2B client entity | Bearer JWT |
| `POST` | `/api/v1/invoices` | Generate and issue commercial invoice | Bearer JWT |
| `POST` | `/api/v1/payments` | Record settlement transaction & auto-reconcile | Bearer JWT |
| `GET` | `/api/v1/analytics/summary` | Fetch AR aging, collection ratio, and KPIs | Bearer JWT |

## ⚡ Quickstart
```bash
docker-compose up --build -d
```
API will be available at `http://localhost:5001`.
