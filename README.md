# Hi, I'm Darren Tai

Electrical Engineering master's student at Chang Gung University, focused on **embedded software**, **edge AI**, **sensor fusion**, **TinyML**, and backend systems that turn device data into usable applications.

My current research direction is an **MCU-based multi-pressure-sensor fusion system with TinyML for real-time chest-compression quality assessment**. I enjoy building systems where hardware signals, firmware behavior, data flow, and user-facing software all have to work together.

As part of the **STP26 Seed Talent Program**, I worked with a team on Dyaco International's AI running-form coaching app. The project combined mobile video capture, pose analysis, educational AI feedback, and cloud history tracking, and received the program's **Best Project Award — First Place (Team)**.

---

## Focus

- Embedded software and firmware for sensor-driven systems
- MCU-based signal processing, sensor fusion, and real-time evaluation
- TinyML and edge-device AI deployment
- Computer vision and pose-analysis applications
- Backend services for AI-assisted workflows and device/application integration
- Reliability patterns: heartbeat monitoring, failover, consensus, state sync, and recovery

---

## Tech Stack

### Embedded, Edge AI & Systems
![Embedded Software](https://img.shields.io/badge/Embedded_Software-204B57?style=for-the-badge)
![Firmware](https://img.shields.io/badge/Firmware-355C7D?style=for-the-badge)
![MCU](https://img.shields.io/badge/MCU-2E7D5B?style=for-the-badge)
![Sensor Fusion](https://img.shields.io/badge/Sensor_Fusion-6A8D73?style=for-the-badge)
![TinyML](https://img.shields.io/badge/TinyML-8A6F3D?style=for-the-badge)
![Edge AI](https://img.shields.io/badge/Edge_AI-1F6F8B?style=for-the-badge)

### Languages & Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-4B5563?style=for-the-badge)

### Platforms & Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![MediaPipe](https://img.shields.io/badge/MediaPipe-0097A7?style=for-the-badge)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)
![Tailscale](https://img.shields.io/badge/Tailscale-242424?style=for-the-badge&logo=tailscale&logoColor=white)
![LINE](https://img.shields.io/badge/LINE-00C300?style=for-the-badge&logo=line&logoColor=white)

---

## Selected Projects

| Project | Focus | What it demonstrates | Tech |
| --- | --- | --- | --- |
| [ESP32-S3 Sensor Data Acquisition for CPR Research](https://github.com/Darren-HUNGITAI/ESP32-S3-Sensor-Data-Acquisition-for-CPR-Research) | Embedded sensor acquisition | A401 / MCP6002 analog pressure sensing with a 100 Hz sampling target, USB serial or Wi-Fi UDP output, and Python CSV experiment capture; synchronized sensor fusion and TinyML are planned | ESP32-S3, Embedded C++, PlatformIO, Analog Sensing, Python |
| **Dyaco AI 跑姿矯正 APP** | STP26 enterprise AI project | Team-built running-form analysis app with 10–30 second video selection, seven pose metrics, educational AI feedback, bilingual sports assistance, cloud history, and trend views; Best Project Award — First Place (Team) | Flutter, FastAPI, MediaPipe, OpenCV, AWS RDS MySQL |
| [LINE-MedBoardCoach](https://github.com/Darren-HUNGITAI/LINE-MedBoardCoach) | AI study assistant | Flask LINE Webhook integrated with CGU LLM, AI Q&A, conversation memory, medical board exam quiz flow, SQLite answer history, scoring, and weakness analysis | Python, Flask, LINE Messaging API, SQLite, LLM API |
| [VideoMaestro](https://github.com/Darren-HUNGITAI/CloudSystem_VideoMaestro) | Fault-tolerant video transcoding cluster | Manager-worker task distribution, chunked upload, GPU-accelerated FFmpeg encoding, node monitoring, worker failure detection, and manager failover mode | Python, Flask, Docker Compose, FFmpeg, NVENC, Cloudflare Tunnel |
| [Aegis-Chain](https://github.com/Darren-HUNGITAI/CloudSystem_Aegis-Chain) | Self-healing P2P ledger | File-based chained ledger, SHA-256 integrity checks, UDP/TCP peer communication, heartbeat-driven liveness, dynamic majority consensus, trust freeze, and automatic ledger repair | Python, Flask, Docker, Tailscale, UDP, REST API |
| [CGU Android ChatApp](https://github.com/Darren-HUNGITAI/CGU_Android_ChatApp) | Real-time Android messaging | Firebase authentication, Cloud Firestore real-time messaging, recent conversations, online/offline availability, profile images, and FCM push notifications | Java, Android SDK, Firebase Auth, Firestore, FCM, Retrofit |

---

## Engineering Highlights

### Enterprise AI Project & Team Award
- Participated in the **STP26 Seed Talent Program** from March 21 to August 22, 2026, working with **Dyaco International Inc.** on an AI running-form coaching application.
- The team integrated Flutter, FastAPI, MediaPipe, OpenCV, AI-generated educational feedback, and AWS RDS MySQL history tracking.
- Received the program's **Best Project Award — First Place (Team)** at the final presentation.
- The system provides running-form analysis and educational feedback; it is not a medical diagnostic or injury-prediction tool.

### Embedded Edge AI Direction
- Built an [ESP32-S3 CPR research acquisition prototype](https://github.com/Darren-HUNGITAI/ESP32-S3-Sensor-Data-Acquisition-for-CPR-Research) with A401 / MCP6002 pressure sensing, USB serial / Wi-Fi UDP transports, and Python CSV capture. The 100 Hz rate is a sampling target, not a measured guarantee.
- An earlier ICM-20948 telemetry pipeline uses MQTT, Docker, SQLite, FastAPI, and WebSocket charts; synchronized pressure / IMU fusion and TinyML inference remain future work.
- Researching MCU-based multi-pressure-sensor fusion for real-time chest-compression quality assessment.
- Interested in TinyML deployment, sensor firmware, wearable-device software, and edge-device data pipelines.
- Career direction: **Embedded Software Engineer Intern**, **Firmware Engineer Intern**, **IoT Firmware Engineer**, **Sensor Firmware Engineer**, **Wearable Device Engineer**, and **Edge Device Software Engineer**.

### Backend, Reliability & AI Workflows
- Built distributed systems that handle failure paths explicitly: heartbeat checks, failover mode, consensus, repair, and live node state.
- Built AI-assisted workflow software that turns domain content and user interaction history into practical feedback loops.
- Comfortable connecting UI flows, APIs, containers, databases, and real-time application state.

### Semiconductor Field Experience
- **Micron MTB PWF MRDA - Summer Intern, Equipment Engineering:** contributed to the TIQ (Tool Installation & Qualification) Management and Data Visualization platform by designing its data-processing architecture and automated workflows with Microsoft Power Apps, Power Automate, and Power BI.

---

## Contact

- GitHub: [@Darren-HUNGITAI](https://github.com/Darren-HUNGITAI)
- Personal Site: [Darren Tai Portfolio](https://darren-hungitai.github.io/B0821123/)

---

> Build close to the signal. Make the system observable. Test the failure path.
