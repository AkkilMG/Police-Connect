# SQL

### Basic

- Create a database

```bash
CREATE DATABASE POLICE_CONNECT;
```

- Use the database

```bash
USE POLICE_CONNECT;
```

### Table

```bash
CREATE TABLE USER (
	UserID VARCHAR(20) NOT NULL,
    Username VARCHAR(15),
    Password VARCHAR(20),
    Email VARCHAR(40),
    PhoneNumber VARCHAR(12) NOT NULL,
    WANumber VARCHAR(12),
    AccStatus INTEGER,
    Role Integer NOT NULL,
    PRIMARY KEY(UserID)
);
```


```bash

CREATE TABLE CASE_REPORTING (
    ReportID VARCHAR(20) NOT NULL,
    ReportDate INTEGER,
    CrimeType INTEGER NOT NULL,
    IncidentDate DATE,
    IncidentLoc VARCHAR(20)  NOT NULL,
    UserID VARCHAR(20),
    EvidenceDoc VARCHAR(50) NOT NULL,
    EvidenceDesc VARCHAR(200) NOT NULL,
    SuspeciousDocs VARCHAR(50),
    SuspeciousDesc VARCHAR(200),
    Anonymity BOOLEAN NOT NULL,
    PRIMARY KEY(ReportID),
    FOREIGN KEY (UserID) REFERENCES USER(UserID)
);
```


```bash
CREATE TABLE CASE_TRACKING (
	CaseID VARCHAR(20) NOT NULL,
	CurrentStatus INTEGER NOT NULL,
	UserID VARCHAR(20) NOT NULL,
	DateOpen DATE,
	DateClosed DATE,
    ProcessDocs VARCHAR(50),
	PRIMARY KEY(CaseID),
	FOREIGN KEY (UserID) REFERENCES USER(UserID)
);
```


```bash
CREATE TABLE CHALLAN_TRACKING (
	ChallanID VARCHAR(20) NOT NULL,
    Reason VARCHAR(400),
    VHNo VARCHAR(10),
    ViolationProof VARCHAR(50),
    ViolationPlace VARCHAR(20),
    IssueDate DATE,
    UserID VARCHAR(20),
    PoliceStation VARCHAR(10),
    Due INTEGER,
    CaseID VARCHAR(20),
    PRIMARY KEY(ChallanID),
	FOREIGN KEY (UserID) REFERENCES USER(UserID)
);
```


```bash
CREATE TABLE EVIDENCE (
	UserID VARCHAR(20),
    EvidenceID VARCHAR(20) NOT NULL,
    CaseID VARCHAR(20),
    CaseDesc VARCHAR(400),
    EvidenceDesc VARCHAR(400) NOT NULL,
    EvidenceDocs VARCHAR(50),
    EvidenceLoc VARCHAR(20),
    Submitted DATE,
	Anonymity BOOLEAN NOT NULL,
    PRIMARY KEY(EvidenceID),
	FOREIGN KEY (CaseID) REFERENCES CASE_TRACKING(CaseID),
	FOREIGN KEY (UserID) REFERENCES USER(UserID)
);
```

