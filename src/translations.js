const translations = {
  ko: {
    // Header
    name: "이학성",
    title: "C++ Developer",
    
    // Navigation
    about: "소개",
    experience: "경력",
    skills: "기술 스택",
    security: "보안 업무",
    contact: "연락처",
    
    // About Section
    greeting: "안녕하세요!",
    age: "세",
    yearBorn: "년생",
    introText1: (name, age) => `저는 ${name}입니다. ${age}세의 열정적인 C++ 개발자로써 3년간 이노티움에서 대리로 근무하며 다양한 프로젝트를 경험했습니다.`,
    introText2: "프로그램 개발뿐만 아니라 기술지원, 유지보수, 그리고 보안 분야에서도 경험을 쌓았습니다.",
    
    // Experience Section
    experienceTitle: "경력 사항",
    innotium: "이노티움",
    position: "대리",
    duration: "3년 근무",
    
    // Job Roles
    ransomwareDefense: "랜섬웨어 방어 프로그램 개발",
    ransomwareMainDev: "랜섬웨어 방어 프로그램 보안기능확인서 발급 메인 개발자",
    linuxWatermark: "리눅스 + 개방형OS 워터마크 개발",
    macosWatermark: "맥OS 워터마크 개발",
    serverManagement: "서버 관리",
    mainSoloDev: "메인 솔로 개발",
    idcMainAdmin: "IDC센터 메인 관리자",
    serverSetupManagement: "서버 구축 및 관리",
    
    // Technical Details
    techStack: "기술 스택:",
    performanceOpt: "성능 최적화:",
    kernelCompat: "커널 드라이브 호환:",
    commLogic: "통신 로직 개발:",
    securityEnhance: "보안 강화:",
    integrityVerify: "무결성 검증:",
    digitalSignature: "전자서명:",
    responseCenter: "침해대응 센터 활동:",
    
    // Detailed Descriptions
    pidOptimization: "PID 검증을 위한 포인터 로직을 수정하여 CPU 사용량 약 12% 감소",
    kernelDescription: "커널 드라이브 특정 파일시스템 이벤트 수집 예외처리 수정 개발",
    commDescription: "특정 OS.Ver 통신 불가로 인한 통신로직 개발",
    mssqlDefense: "MSSQL payload 취약점 분석 및 방어 로직 개발",
    integrityDescription: "무결성검증 로직 적용으로 변조 감지 및 변조된 파일 Fix 코드 추가",
    signatureDescription: "전자서명 검증 로직 개발",
    responseActivities1: "오탐 방지 및 탐지 기능 향상을 위한 디버깅 및 랜섬웨어 침해대응 센터 활동",
    responseActivities2: "현장 대응 및 QA팀과 소통하여 추가 기능 약 30여개 개발",
    responseActivities3: "랜섬웨어 침해 경로 파악 및 방어 로직 4개 개발",
    responseActivities4: "랜섬웨어 분석을 위한 주기적인 연구 진행",
    
    // Watermark Features
    watermarkSolution: "워터마크 솔루션:",
    frontWatermark: "최전방 워터마크:",
    policyApply: "정책 적용:",
    workspaceSupport: "WorkSpace 지원:",
    nativeDev: "네이티브 개발:",
    jsonPolicy: "정책 관리:",
    fullSupport: "전체 지원:",
    systemInfo: "시스템 정보:",
    
    watermarkDescription1: "C++ / X11 을 이용한 워터마크 솔루션 개발",
    watermarkDescription2: "최전방 워터마크 기능 추가",
    watermarkDescription3: "개별 워터마크 정책 적용",
    watermarkDescription4: "모든 WorkSpace에서 항상 최전방 워터마크 기능 적용",
    macDescription1: "AppKit을 이용한 워터마크 제작",
    macDescription2: "최전방 워터마크 기능 추가",
    macDescription3: "JSON을 통한 개별 워터마크 정책 적용",
    macDescription4: "모든 WorkSpace에서 항상 최전방 워터마크 기능 적용",
    macDescription5: "적용된 PC의 정보를 후킹한 설정 추가",
    
    // Server Management
    loadBalancing: "로드밸런싱:",
    diskManagement: "디스크 관리:",
    cacheSystem: "캐시 시스템:",
    networkMonitoring: "네트워크 관제:",
    dataProtection: "데이터 보호:",
    serverSetup: "서버 구축:",
    vulnerabilityAnalysis: "서버 취약점 분석:",
    maintenance: "유지보수:",
    
    serverDescription1: "각 Active 서버의 실시간 트래픽 분산 관리",
    serverDescription2: "Disk Pool 관리 (90% 이상 올라가지 않도록 모니터링)",
    serverDescription3: "SSD를 이용한 Cash 관리 시스템 구축",
    serverDescription4: "네트워크 트래픽 관제 및 사용에 따른 권장량 보고서 제작 후 예산 할당 및 적용",
    serverDescription5: "RAID 시스템 및 데이터 보호 시스템 관리",
    serverDescription6: "고객사 서버에 개별 백엔드 구축 및 프론트 페이지 연동",
    serverDescription7: "XSS취약점 및 업로드 취약점 개선",
    serverDescription8: "현장 대응 및 주기적인 소통으로 고객사 니즈(정책 혹은 질의응답) 해소",
    
    // Skills
    programmingLanguages: "프로그래밍 언어",
    operatingSystems: "운영체제",
    cloudInfra: "클라우드 & 인프라",
    devTools: "개발 도구 & 프레임워크",
    serverInfraManagement: "서버 & 인프라 관리",
    
    idcManagement: "IDC 센터 관리",
    loadBalance: "로드밸런싱",
    raidSystem: "RAID 시스템",
    ssdCache: "SSD 캐시",
    networkTraffic: "네트워크 트래픽 관제",
    diskPool: "디스크 풀 관리",
    
    // Security
    securityTitle: "보안 업무",
    ransomwareResponse: "랜섬웨어 침해대응 센터",
    penetrationAnalysis: "침투 경로 분석",
    infectionAnalysis: "감염 형식 분석",
    incidentResponse: "침해 대응",
    defenseLogic: "방어 로직 개발",
    
    securityDesc1: "랜섬웨어의 시스템 침투 경로를 분석하고 보안 취약점을 식별합니다.",
    securityDesc2: "다양한 랜섬웨어의 감염 방식과 패턴을 연구하여 대응 방안을 수립합니다.",
    securityDesc3: "실시간 보안 위협 모니터링 및 즉각적인 대응 체계를 운영합니다.",
    securityDesc4: "MSSQL payload 취약점 분석 및 4개의 랜섬웨어 방어 로직을 개발했습니다.",
    
    // Contact
    contactTitle: "연락처",
    contactDescription: "프로젝트 협업이나 기술 문의가 있으시면 언제든지 연락주세요!",
    
    // Footer
    allRightsReserved: "모든 권리 보유.",
    madeWithReact: "이 페이지는 React로 제작되었습니다.",
    
    // View Mode
    summaryView: "요약 보기",
    detailedView: "상세 보기",
    
    // Position
    currentPosition: "현재 위치",
    
    // No data
    noExperienceData: "경력 정보를 찾을 수 없습니다.",
    
    // Home Page
    homeIntro: "3년간의 C++ 개발 경험과 보안 전문성을 바탕으로 안전하고 효율적인 솔루션을 만들어가는 개발자입니다.",
    learnMore: "더 알아보기",
    getInTouch: "연락하기",
    experienceHighlight: "3년의 실무 경험",
    experienceHighlightDesc: "이노티움에서 랜섬웨어 방어 솔루션 개발 및 CC인증 획득",
    skillsHighlight: "다양한 기술 스택",
    skillsHighlightDesc: "C/C++, 클라우드, 보안 등 폭넓은 기술 역량 보유",
    securityHighlight: "보안 전문성",
    securityHighlightDesc: "랜섬웨어 대응 및 보안기능확인서 발급 경험",
    viewDetails: "자세히 보기",
    currentStatus: "현재 활동",
    bobTitle: "Best of Best 14기",
    bobTrack: "보안제품개발 트랙",
    bobStatus: "교육 진행 중 (2025.07 ~ 2026.03)",
    innotiumStatus: "랜섬웨어 방어 솔루션 개발 (2022.05 ~ 2025.06)",
    
    // BoB
    bobDescription: "차세대 보안리더 양성 프로그램에서 보안제품개발 트랙 교육 수강 중",
    bobDetail1: "보안 제품 개발 심화 과정",
    bobDetail2: "실무 프로젝트 및 멘토링",
    bobDetail3: "보안 전문가 네트워킹",
    
    // CC Certification
    ccCertification: "랜섬웨어 방어 솔루션(C++) 메인 개발자로써 보안기능확인서(CC인증)를 발급받았습니다.",
    
    // About Page
    aboutMe: "자기소개",
    aboutDetail1: "저는 문제 해결에 열정을 가진 개발자입니다. 복잡한 문제를 단순하고 효율적인 코드로 풀어내는 과정을 즐기며, 항상 더 나은 방법을 고민합니다.",
    aboutDetail2: "보안에 대한 깊은 관심을 바탕으로 안전한 소프트웨어를 만들기 위해 노력하고 있으며, Best of Best 프로그램을 통해 전문성을 더욱 강화하고 있습니다.",
    personalInfo: "개인 정보",
    birthDate: "생년월일",
    location: "위치",
    locationValue: "대한민국",
    email: "이메일",
    values: "핵심 가치",
    value1Title: "문제 해결",
    value1Desc: "복잡한 문제를 논리적으로 분석하고 효율적으로 해결합니다.",
    value2Title: "지속적인 학습",
    value2Desc: "새로운 기술과 지식을 끊임없이 습득하며 성장합니다.",
    value3Title: "협업과 소통",
    value3Desc: "팀원들과 적극적으로 소통하며 함께 성장합니다.",
    
    // Skills Page Details
    cppDescription: "시스템 프로그래밍 및 성능 최적화에 강점을 가지고 있습니다.",
    jsDescription: "프론트엔드 개발 및 Node.js 백엔드 개발 경험이 있습니다.",
    swiftDescription: "macOS 네이티브 애플리케이션 개발 경험이 있습니다.",
    windowsDescription: "Windows 커널 드라이버 및 시스템 프로그래밍 경험",
    linuxDescription: "Linux 시스템 프로그래밍 및 X11 개발 경험",
    openOSDescription: "개방형 OS 환경에서의 소프트웨어 개발 경험",
    macOSDescription: "macOS 네이티브 애플리케이션 개발 경험",
    ec2Description: "서버 인스턴스 관리 및 배포 자동화",
    s3Description: "대용량 파일 저장 및 백업 시스템 구축",
    rdsDescription: "데이터베이스 관리 및 최적화",
    x11Description: "Linux GUI 애플리케이션 개발",
    appKitDescription: "macOS 네이티브 UI 개발",
    mssqlDescription: "데이터베이스 설계 및 쿼리 최적화",
    idcDescription: "물리 서버 관리 및 네트워크 구성",
    loadBalanceDescription: "트래픽 분산 및 고가용성 시스템 구축",
    raidDescription: "데이터 안정성 및 성능 최적화",
    networkTrafficDescription: "네트워크 성능 모니터링 및 최적화",
    ransomwareResponseDesc: "랜섬웨어 공격 분석 및 대응 전략 수립",
    vulnerabilityAnalysisDesc: "시스템 취약점 분석 및 보안 패치",
    ccCertificationSkill: "CC인증 (보안기능확인서)",
    ccCertificationDesc: "보안 제품 인증 프로세스 경험 및 문서화",
    
    // Contact Page
    contactIntro: "프로젝트 협업이나 기술적인 문의사항이 있으시다면 편하게 연락주세요!",
    emailDescription: "가장 빠르게 응답받을 수 있는 연락 수단입니다.",
    githubDescription: "제가 작업한 프로젝트들을 확인하실 수 있습니다.",
    linkedinDescription: "프로페셔널 네트워크를 통해 연결해보세요.",
    sendMessage: "메시지 보내기",
    yourName: "이름",
    yourEmail: "이메일",
    subject: "제목",
    message: "메시지",
    namePlaceholder: "홍길동",
    emailPlaceholder: "example@email.com",
    subjectPlaceholder: "문의 제목을 입력하세요",
    messagePlaceholder: "메시지 내용을 입력하세요",
    sendButton: "전송하기",
    
    // Additional translations
    education: "컴퓨터공학 전공",
    yearsExperience: "년 경력",
    skillsIntro: "다양한 기술 스택을 바탕으로 안정적이고 효율적인 시스템을 구축합니다.",
    expert: "전문가",
    intermediate: "중급",
    inProgress: "진행 중",
    emailPreferred: "선호 연락 수단",
    viewProjects: "프로젝트 보기",
    professionalNetwork: "프로페셔널 네트워크",
    contactCTA: "새로운 기회와 도전을 환영합니다!"
  },
  
  en: {
    // Header
    name: "Lee Haksung",
    title: "C++ Developer",
    
    // Navigation
    about: "About",
    experience: "Experience",
    skills: "Skills",
    security: "Security",
    contact: "Contact",
    
    // About Section
    greeting: "Hello!",
    age: "years old",
    yearBorn: "born in",
    introText1: (name, age) => `I'm ${name}. As a passionate ${age}-year-old C++ developer, I have worked as an assistant manager at Innotium for 3 years, experiencing various projects.`,
    introText2: "I have gained experience not only in program development but also in technical support, maintenance, and security fields.",
    
    // Experience Section
    experienceTitle: "Experience",
    innotium: "Innotium",
    position: "Assistant Manager",
    duration: "3 years",
    
    // Job Roles
    ransomwareDefense: "Ransomware Defense Program Development",
    ransomwareMainDev: "Main Developer for Ransomware Defense Program Security Certification",
    linuxWatermark: "Linux + Open OS Watermark Development",
    macosWatermark: "macOS Watermark Development",
    serverManagement: "Server Management",
    mainSoloDev: "Main Solo Developer",
    idcMainAdmin: "IDC Center Main Administrator",
    serverSetupManagement: "Server Setup and Management",
    
    // Technical Details
    techStack: "Tech Stack:",
    performanceOpt: "Performance Optimization:",
    kernelCompat: "Kernel Driver Compatibility:",
    commLogic: "Communication Logic Development:",
    securityEnhance: "Security Enhancement:",
    integrityVerify: "Integrity Verification:",
    digitalSignature: "Digital Signature:",
    responseCenter: "Response Center Activities:",
    
    // Detailed Descriptions
    pidOptimization: "Reduced CPU usage by approximately 12% by modifying pointer logic for PID verification",
    kernelDescription: "Developed exception handling for kernel driver specific filesystem event collection",
    commDescription: "Developed communication logic for specific OS versions with communication issues",
    mssqlDefense: "Analyzed MSSQL payload vulnerabilities and developed defense logic",
    integrityDescription: "Applied integrity verification logic to detect tampering and added fix code for tampered files",
    signatureDescription: "Developed digital signature verification logic",
    responseActivities1: "Debugging and ransomware response center activities to prevent false positives and improve detection",
    responseActivities2: "Developed approximately 30 additional features through field response and communication with QA team",
    responseActivities3: "Identified ransomware infiltration paths and developed 4 defense logics",
    responseActivities4: "Conducted periodic research for ransomware analysis",
    
    // Watermark Features
    watermarkSolution: "Watermark Solution:",
    frontWatermark: "Frontmost Watermark:",
    policyApply: "Policy Application:",
    workspaceSupport: "WorkSpace Support:",
    nativeDev: "Native Development:",
    jsonPolicy: "Policy Management:",
    fullSupport: "Full Support:",
    systemInfo: "System Information:",
    
    watermarkDescription1: "Developed watermark solution using C++ / X11",
    watermarkDescription2: "Added frontmost watermark feature",
    watermarkDescription3: "Applied individual watermark policies",
    watermarkDescription4: "Applied always-frontmost watermark feature across all WorkSpaces",
    macDescription1: "Created watermark using AppKit",
    macDescription2: "Added frontmost watermark feature",
    macDescription3: "Applied individual watermark policies through JSON",
    macDescription4: "Applied always-frontmost watermark feature across all WorkSpaces",
    macDescription5: "Added settings to hook applied PC information",
    
    // Server Management
    loadBalancing: "Load Balancing:",
    diskManagement: "Disk Management:",
    cacheSystem: "Cache System:",
    networkMonitoring: "Network Monitoring:",
    dataProtection: "Data Protection:",
    serverSetup: "Server Setup:",
    vulnerabilityAnalysis: "Server Vulnerability Analysis:",
    maintenance: "Maintenance:",
    
    serverDescription1: "Real-time traffic distribution management for each active server",
    serverDescription2: "Disk Pool management (monitoring to prevent exceeding 90%)",
    serverDescription3: "Built cash management system using SSD",
    serverDescription4: "Network traffic monitoring and budget allocation based on usage recommendation reports",
    serverDescription5: "RAID system and data protection system management",
    serverDescription6: "Individual backend setup and frontend page integration for client servers",
    serverDescription7: "Improved XSS and upload vulnerabilities",
    serverDescription8: "Resolved client needs (policies or Q&A) through field response and regular communication",
    
    // Skills
    programmingLanguages: "Programming Languages",
    operatingSystems: "Operating Systems",
    cloudInfra: "Cloud & Infrastructure",
    devTools: "Development Tools & Frameworks",
    serverInfraManagement: "Server & Infrastructure Management",
    
    idcManagement: "IDC Center Management",
    loadBalance: "Load Balancing",
    raidSystem: "RAID System",
    ssdCache: "SSD Cache",
    networkTraffic: "Network Traffic Control",
    diskPool: "Disk Pool Management",
    
    // Security
    securityTitle: "Security Work",
    ransomwareResponse: "Ransomware Response Center",
    penetrationAnalysis: "Penetration Path Analysis",
    infectionAnalysis: "Infection Pattern Analysis",
    incidentResponse: "Incident Response",
    defenseLogic: "Defense Logic Development",
    
    securityDesc1: "Analyze ransomware system penetration paths and identify security vulnerabilities.",
    securityDesc2: "Study various ransomware infection methods and patterns to establish response strategies.",
    securityDesc3: "Operate real-time security threat monitoring and immediate response systems.",
    securityDesc4: "Analyzed MSSQL payload vulnerabilities and developed 4 ransomware defense logics.",
    
    // Contact
    contactTitle: "Contact",
    contactDescription: "Feel free to contact me for project collaboration or technical inquiries!",
    
    // Footer
    allRightsReserved: "All rights reserved.",
    madeWithReact: "This page was made with React.",
    
    // View Mode
    summaryView: "Summary View",
    detailedView: "Detailed View",
    
    // Position
    currentPosition: "Current Position",
    
    // No data
    noExperienceData: "Experience information not found.",
    
    // Home Page
    homeIntro: "A developer creating safe and efficient solutions based on 3 years of C++ development experience and security expertise.",
    learnMore: "Learn More",
    getInTouch: "Get In Touch",
    experienceHighlight: "3 Years of Experience",
    experienceHighlightDesc: "Developed ransomware defense solution and obtained CC certification at Innotium",
    skillsHighlight: "Diverse Tech Stack",
    skillsHighlightDesc: "Extensive technical capabilities including C/C++, cloud, and security",
    securityHighlight: "Security Expertise",
    securityHighlightDesc: "Experience in ransomware response and security certification",
    viewDetails: "View Details",
    currentStatus: "Current Activities",
    bobTitle: "Best of Best 14th",
    bobTrack: "Security Product Development Track",
    bobStatus: "Currently in training (2025.07 ~ 2026.03)",
    innotiumStatus: "Ransomware defense solution development (2022.05 ~ 2025.06)",
    
    // BoB
    bobDescription: "Participating in the next-generation security leader training program, Security Product Development track",
    bobDetail1: "Advanced security product development course",
    bobDetail2: "Practical projects and mentoring",
    bobDetail3: "Security expert networking",
    
    // CC Certification
    ccCertification: "As the main developer of the ransomware defense solution (C++), obtained security function confirmation certificate (CC certification).",
    
    // About Page
    aboutMe: "About Me",
    aboutDetail1: "I am a developer passionate about problem-solving. I enjoy the process of solving complex problems with simple and efficient code, always considering better approaches.",
    aboutDetail2: "Based on my deep interest in security, I strive to create secure software and am further strengthening my expertise through the Best of Best program.",
    personalInfo: "Personal Information",
    birthDate: "Date of Birth",
    location: "Location",
    locationValue: "South Korea",
    email: "Email",
    values: "Core Values",
    value1Title: "Problem Solving",
    value1Desc: "Analyze complex problems logically and solve them efficiently.",
    value2Title: "Continuous Learning",
    value2Desc: "Constantly acquire new technologies and knowledge to grow.",
    value3Title: "Collaboration & Communication",
    value3Desc: "Actively communicate with team members and grow together.",
    
    // Skills Page Details
    cppDescription: "Strong in system programming and performance optimization.",
    jsDescription: "Experience in frontend development and Node.js backend development.",
    swiftDescription: "Experience in macOS native application development.",
    windowsDescription: "Experience in Windows kernel driver and system programming",
    linuxDescription: "Experience in Linux system programming and X11 development",
    openOSDescription: "Experience in software development for open OS environments",
    macOSDescription: "Experience in macOS native application development",
    ec2Description: "Server instance management and deployment automation",
    s3Description: "Large file storage and backup system implementation",
    rdsDescription: "Database management and optimization",
    x11Description: "Linux GUI application development",
    appKitDescription: "macOS native UI development",
    mssqlDescription: "Database design and query optimization",
    idcDescription: "Physical server management and network configuration",
    loadBalanceDescription: "Traffic distribution and high availability system implementation",
    raidDescription: "Data stability and performance optimization",
    networkTrafficDescription: "Network performance monitoring and optimization",
    ransomwareResponseDesc: "Ransomware attack analysis and response strategy development",
    vulnerabilityAnalysisDesc: "System vulnerability analysis and security patching",
    ccCertificationSkill: "CC Certification (Security Function Confirmation)",
    ccCertificationDesc: "Experience in security product certification process and documentation",
    
    // Contact Page
    contactIntro: "Feel free to contact me for project collaboration or technical inquiries!",
    emailDescription: "The fastest way to get a response.",
    githubDescription: "Check out the projects I've worked on.",
    linkedinDescription: "Connect through professional network.",
    sendMessage: "Send Message",
    yourName: "Name",
    yourEmail: "Email",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "John Doe",
    emailPlaceholder: "example@email.com",
    subjectPlaceholder: "Enter your subject",
    messagePlaceholder: "Enter your message",
    sendButton: "Send",
    
    // Additional translations
    education: "Computer Engineering Major",
    yearsExperience: "years of experience",
    skillsIntro: "Building stable and efficient systems based on diverse technical stacks.",
    expert: "Expert",
    intermediate: "Intermediate",
    inProgress: "In Progress",
    emailPreferred: "Preferred contact method",
    viewProjects: "View Projects",
    professionalNetwork: "Professional Network",
    contactCTA: "I welcome new opportunities and challenges!"
  },
  
  zh: {
    // Header
    name: "李学成",
    title: "C++ 开发者",
    
    // Navigation
    about: "介绍",
    experience: "经历",
    skills: "技术栈",
    security: "安全工作",
    contact: "联系方式",
    
    // About Section
    greeting: "您好！",
    age: "岁",
    yearBorn: "年出生",
    introText1: (name, age) => `我是${name}。作为一名充满热情的${age}岁C++开发者，我在Innotium担任助理经理3年，参与了各种项目。`,
    introText2: "我不仅在程序开发方面积累了经验，还在技术支持、维护和安全领域也有所涉猎。",
    
    // Experience Section
    experienceTitle: "工作经历",
    innotium: "Innotium",
    position: "助理经理",
    duration: "3年工作经验",
    
    // Job Roles
    ransomwareDefense: "勒索软件防御程序开发",
    ransomwareMainDev: "勒索软件防御程序安全功能认证主要开发者",
    linuxWatermark: "Linux + 开放操作系统水印开发",
    macosWatermark: "macOS 水印开发",
    serverManagement: "服务器管理",
    mainSoloDev: "主要独立开发者",
    idcMainAdmin: "IDC中心主管理员",
    serverSetupManagement: "服务器搭建与管理",
    
    // Technical Details
    techStack: "技术栈：",
    performanceOpt: "性能优化：",
    kernelCompat: "内核驱动兼容性：",
    commLogic: "通信逻辑开发：",
    securityEnhance: "安全增强：",
    integrityVerify: "完整性验证：",
    digitalSignature: "数字签名：",
    responseCenter: "响应中心活动：",
    
    // Detailed Descriptions
    pidOptimization: "通过修改PID验证的指针逻辑，减少了约12%的CPU使用率",
    kernelDescription: "开发了内核驱动特定文件系统事件收集的异常处理",
    commDescription: "为特定操作系统版本的通信问题开发了通信逻辑",
    mssqlDefense: "分析MSSQL payload漏洞并开发防御逻辑",
    integrityDescription: "应用完整性验证逻辑以检测篡改并添加修复篡改文件的代码",
    signatureDescription: "开发数字签名验证逻辑",
    responseActivities1: "通过调试和勒索软件响应中心活动防止误报并提高检测能力",
    responseActivities2: "通过现场响应和与QA团队的沟通开发了约30个附加功能",
    responseActivities3: "识别勒索软件渗透路径并开发了4个防御逻辑",
    responseActivities4: "进行定期研究以分析勒索软件",
    
    // Watermark Features
    watermarkSolution: "水印解决方案：",
    frontWatermark: "最前端水印：",
    policyApply: "策略应用：",
    workspaceSupport: "工作区支持：",
    nativeDev: "原生开发：",
    jsonPolicy: "策略管理：",
    fullSupport: "全面支持：",
    systemInfo: "系统信息：",
    
    watermarkDescription1: "使用C++ / X11开发水印解决方案",
    watermarkDescription2: "添加最前端水印功能",
    watermarkDescription3: "应用个别水印策略",
    watermarkDescription4: "在所有工作区中应用始终最前端的水印功能",
    macDescription1: "使用AppKit创建水印",
    macDescription2: "添加最前端水印功能",
    macDescription3: "通过JSON应用个别水印策略",
    macDescription4: "在所有工作区中应用始终最前端的水印功能",
    macDescription5: "添加挂钩应用PC信息的设置",
    
    // Server Management
    loadBalancing: "负载均衡：",
    diskManagement: "磁盘管理：",
    cacheSystem: "缓存系统：",
    networkMonitoring: "网络监控：",
    dataProtection: "数据保护：",
    serverSetup: "服务器搭建：",
    vulnerabilityAnalysis: "服务器漏洞分析：",
    maintenance: "维护：",
    
    serverDescription1: "每个活动服务器的实时流量分配管理",
    serverDescription2: "磁盘池管理（监控以防止超过90%）",
    serverDescription3: "使用SSD构建缓存管理系统",
    serverDescription4: "网络流量监控并根据使用建议报告进行预算分配",
    serverDescription5: "RAID系统和数据保护系统管理",
    serverDescription6: "为客户服务器设置个别后端并集成前端页面",
    serverDescription7: "改进XSS和上传漏洞",
    serverDescription8: "通过现场响应和定期沟通解决客户需求（策略或问答）",
    
    // Skills
    programmingLanguages: "编程语言",
    operatingSystems: "操作系统",
    cloudInfra: "云和基础设施",
    devTools: "开发工具和框架",
    serverInfraManagement: "服务器和基础设施管理",
    
    idcManagement: "IDC中心管理",
    loadBalance: "负载均衡",
    raidSystem: "RAID系统",
    ssdCache: "SSD缓存",
    networkTraffic: "网络流量控制",
    diskPool: "磁盘池管理",
    
    // Security
    securityTitle: "安全工作",
    ransomwareResponse: "勒索软件响应中心",
    penetrationAnalysis: "渗透路径分析",
    infectionAnalysis: "感染模式分析",
    incidentResponse: "事件响应",
    defenseLogic: "防御逻辑开发",
    
    securityDesc1: "分析勒索软件系统渗透路径并识别安全漏洞。",
    securityDesc2: "研究各种勒索软件感染方法和模式以制定响应策略。",
    securityDesc3: "运行实时安全威胁监控和即时响应系统。",
    securityDesc4: "分析MSSQL payload漏洞并开发了4个勒索软件防御逻辑。",
    
    // Contact
    contactTitle: "联系方式",
    contactDescription: "欢迎随时联系我进行项目合作或技术咨询！",
    
    // Footer
    allRightsReserved: "版权所有。",
    madeWithReact: "本页面使用React制作。",
    
    // View Mode
    summaryView: "摘要视图",
    detailedView: "详细视图",
    
    // Position
    currentPosition: "当前位置",
    
    // No data
    noExperienceData: "未找到经历信息。",
    
    // Home Page
    homeIntro: "基于3年的C++开发经验和安全专业知识，创建安全高效解决方案的开发者。",
    learnMore: "了解更多",
    getInTouch: "联系我",
    experienceHighlight: "3年工作经验",
    experienceHighlightDesc: "在Innotium开发勒索软件防御解决方案并获得CC认证",
    skillsHighlight: "多样化技术栈",
    skillsHighlightDesc: "拥有C/C++、云计算和安全等广泛的技术能力",
    securityHighlight: "安全专业知识",
    securityHighlightDesc: "勒索软件响应和安全认证经验",
    viewDetails: "查看详情",
    currentStatus: "当前活动",
    bobTitle: "Best of Best 14期",
    bobTrack: "安全产品开发赛道",
    bobStatus: "培训中 (2025.07 ~ 2026.03)",
    innotiumStatus: "勒索软件防御解决方案开发 (2022.05 ~ 2025.06)",
    
    // BoB
    bobDescription: "参加下一代安全领导者培训计划，安全产品开发赛道",
    bobDetail1: "高级安全产品开发课程",
    bobDetail2: "实践项目和导师指导",
    bobDetail3: "安全专家网络",
    
    // CC Certification
    ccCertification: "作为勒索软件防御解决方案(C++)的主要开发者，获得了安全功能确认证书(CC认证)。",
    
    // About Page
    aboutMe: "关于我",
    aboutDetail1: "我是一个对解决问题充满热情的开发者。我享受用简单高效的代码解决复杂问题的过程，总是考虑更好的方法。",
    aboutDetail2: "基于对安全的深厚兴趣，我努力创建安全的软件，并通过Best of Best计划进一步加强我的专业知识。",
    personalInfo: "个人信息",
    birthDate: "出生日期",
    location: "地点",
    locationValue: "韩国",
    email: "电子邮件",
    values: "核心价值观",
    value1Title: "问题解决",
    value1Desc: "逻辑分析复杂问题并高效解决。",
    value2Title: "持续学习",
    value2Desc: "不断获取新技术和知识以成长。",
    value3Title: "协作与沟通",
    value3Desc: "与团队成员积极沟通，共同成长。",
    
    // Skills Page Details
    cppDescription: "擅长系统编程和性能优化。",
    jsDescription: "拥有前端开发和Node.js后端开发经验。",
    swiftDescription: "拥有macOS原生应用开发经验。",
    windowsDescription: "Windows内核驱动和系统编程经验",
    linuxDescription: "Linux系统编程和X11开发经验",
    openOSDescription: "开放操作系统环境软件开发经验",
    macOSDescription: "macOS原生应用开发经验",
    ec2Description: "服务器实例管理和部署自动化",
    s3Description: "大文件存储和备份系统实现",
    rdsDescription: "数据库管理和优化",
    x11Description: "Linux GUI应用开发",
    appKitDescription: "macOS原生UI开发",
    mssqlDescription: "数据库设计和查询优化",
    idcDescription: "物理服务器管理和网络配置",
    loadBalanceDescription: "流量分配和高可用系统实现",
    raidDescription: "数据稳定性和性能优化",
    networkTrafficDescription: "网络性能监控和优化",
    ransomwareResponseDesc: "勒索软件攻击分析和响应策略制定",
    vulnerabilityAnalysisDesc: "系统漏洞分析和安全补丁",
    ccCertificationSkill: "CC认证(安全功能确认)",
    ccCertificationDesc: "安全产品认证流程经验和文档化",
    
    // Contact Page
    contactIntro: "欢迎联系我进行项目合作或技术咨询！",
    emailDescription: "获得回复的最快方式。",
    githubDescription: "查看我参与的项目。",
    linkedinDescription: "通过专业网络连接。",
    sendMessage: "发送消息",
    yourName: "姓名",
    yourEmail: "电子邮件",
    subject: "主题",
    message: "消息",
    namePlaceholder: "张三",
    emailPlaceholder: "example@email.com",
    subjectPlaceholder: "输入主题",
    messagePlaceholder: "输入您的消息",
    sendButton: "发送",
    
    // Additional translations
    education: "计算机工程专业",
    yearsExperience: "年经验",
    skillsIntro: "基于多样化的技术栈构建稳定高效的系统。",
    expert: "专家",
    intermediate: "中级",
    inProgress: "进行中",
    emailPreferred: "首选联系方式",
    viewProjects: "查看项目",
    professionalNetwork: "专业网络",
    contactCTA: "欢迎新的机会和挑战！"
  },
  
  ja: {
    // Header
    name: "イ・ハクソン",
    title: "C++ 開発者",
    
    // Navigation
    about: "紹介",
    experience: "経歴",
    skills: "技術スタック",
    security: "セキュリティ業務",
    contact: "連絡先",
    
    // About Section
    greeting: "こんにちは！",
    age: "歳",
    yearBorn: "年生まれ",
    introText1: (name, age) => `私は${name}です。情熱的な${age}歳のC++開発者として、Innotiumで3年間アシスタントマネージャーとして働き、様々なプロジェクトを経験しました。`,
    introText2: "プログラム開発だけでなく、技術サポート、メンテナンス、セキュリティ分野でも経験を積みました。",
    
    // Experience Section
    experienceTitle: "経歴",
    innotium: "Innotium",
    position: "アシスタントマネージャー",
    duration: "3年勤務",
    
    // Job Roles
    ransomwareDefense: "ランサムウェア防御プログラム開発",
    ransomwareMainDev: "ランサムウェア防御プログラムセキュリティ機能認証書発行メイン開発者",
    linuxWatermark: "Linux + オープンOS ウォーターマーク開発",
    macosWatermark: "macOS ウォーターマーク開発",
    serverManagement: "サーバー管理",
    mainSoloDev: "メインソロ開発者",
    idcMainAdmin: "IDCセンターメイン管理者",
    serverSetupManagement: "サーバー構築と管理",
    
    // Technical Details
    techStack: "技術スタック：",
    performanceOpt: "パフォーマンス最適化：",
    kernelCompat: "カーネルドライバー互換性：",
    commLogic: "通信ロジック開発：",
    securityEnhance: "セキュリティ強化：",
    integrityVerify: "整合性検証：",
    digitalSignature: "デジタル署名：",
    responseCenter: "対応センター活動：",
    
    // Detailed Descriptions
    pidOptimization: "PID検証のためのポインタロジックを修正し、CPU使用率を約12%削減",
    kernelDescription: "カーネルドライバー特定ファイルシステムイベント収集の例外処理を開発",
    commDescription: "特定のOSバージョンの通信不可問題に対する通信ロジックを開発",
    mssqlDefense: "MSSQL payload脆弱性を分析し、防御ロジックを開発",
    integrityDescription: "整合性検証ロジックを適用して改ざんを検出し、改ざんされたファイルの修正コードを追加",
    signatureDescription: "デジタル署名検証ロジックを開発",
    responseActivities1: "誤検知防止と検出機能向上のためのデバッグとランサムウェア対応センター活動",
    responseActivities2: "現場対応とQAチームとのコミュニケーションを通じて約30の追加機能を開発",
    responseActivities3: "ランサムウェア侵入経路を特定し、4つの防御ロジックを開発",
    responseActivities4: "ランサムウェア分析のための定期的な研究を実施",
    
    // Watermark Features
    watermarkSolution: "ウォーターマークソリューション：",
    frontWatermark: "最前面ウォーターマーク：",
    policyApply: "ポリシー適用：",
    workspaceSupport: "ワークスペースサポート：",
    nativeDev: "ネイティブ開発：",
    jsonPolicy: "ポリシー管理：",
    fullSupport: "フルサポート：",
    systemInfo: "システム情報：",
    
    watermarkDescription1: "C++ / X11を使用したウォーターマークソリューションを開発",
    watermarkDescription2: "最前面ウォーターマーク機能を追加",
    watermarkDescription3: "個別ウォーターマークポリシーを適用",
    watermarkDescription4: "すべてのワークスペースで常に最前面ウォーターマーク機能を適用",
    macDescription1: "AppKitを使用してウォーターマークを作成",
    macDescription2: "最前面ウォーターマーク機能を追加",
    macDescription3: "JSONを通じて個別ウォーターマークポリシーを適用",
    macDescription4: "すべてのワークスペースで常に最前面ウォーターマーク機能を適用",
    macDescription5: "適用されたPCの情報をフックする設定を追加",
    
    // Server Management
    loadBalancing: "ロードバランシング：",
    diskManagement: "ディスク管理：",
    cacheSystem: "キャッシュシステム：",
    networkMonitoring: "ネットワーク監視：",
    dataProtection: "データ保護：",
    serverSetup: "サーバー構築：",
    vulnerabilityAnalysis: "サーバー脆弱性分析：",
    maintenance: "メンテナンス：",
    
    serverDescription1: "各アクティブサーバーのリアルタイムトラフィック分散管理",
    serverDescription2: "ディスクプール管理（90%を超えないようにモニタリング）",
    serverDescription3: "SSDを使用したキャッシュ管理システムを構築",
    serverDescription4: "ネットワークトラフィック監視と使用量に基づく推奨レポートの作成後、予算配分と適用",
    serverDescription5: "RAIDシステムとデータ保護システムの管理",
    serverDescription6: "顧客サーバーに個別バックエンドを構築し、フロントエンドページと連携",
    serverDescription7: "XSS脆弱性とアップロード脆弱性の改善",
    serverDescription8: "現場対応と定期的なコミュニケーションを通じて顧客ニーズ（ポリシーまたはQ&A）を解決",
    
    // Skills
    programmingLanguages: "プログラミング言語",
    operatingSystems: "オペレーティングシステム",
    cloudInfra: "クラウド＆インフラ",
    devTools: "開発ツール＆フレームワーク",
    serverInfraManagement: "サーバー＆インフラ管理",
    
    idcManagement: "IDCセンター管理",
    loadBalance: "ロードバランシング",
    raidSystem: "RAIDシステム",
    ssdCache: "SSDキャッシュ",
    networkTraffic: "ネットワークトラフィック制御",
    diskPool: "ディスクプール管理",
    
    // Security
    securityTitle: "セキュリティ業務",
    ransomwareResponse: "ランサムウェア対応センター",
    penetrationAnalysis: "侵入経路分析",
    infectionAnalysis: "感染パターン分析",
    incidentResponse: "インシデント対応",
    defenseLogic: "防御ロジック開発",
    
    securityDesc1: "ランサムウェアのシステム侵入経路を分析し、セキュリティ脆弱性を特定します。",
    securityDesc2: "様々なランサムウェアの感染方法とパターンを研究し、対応戦略を確立します。",
    securityDesc3: "リアルタイムセキュリティ脅威監視と即時対応システムを運用します。",
    securityDesc4: "MSSQL payload脆弱性を分析し、4つのランサムウェア防御ロジックを開発しました。",
    
    // Contact
    contactTitle: "連絡先",
    contactDescription: "プロジェクトコラボレーションや技術的なお問い合わせはお気軽にご連絡ください！",
    
    // Footer
    allRightsReserved: "全著作権所有。",
    madeWithReact: "このページはReactで作成されました。",
    
    // View Mode
    summaryView: "要約表示",
    detailedView: "詳細表示",
    
    // Position
    currentPosition: "現在の位置",
    
    // No data
    noExperienceData: "経歴情報が見つかりません。",
    
    // Home Page
    homeIntro: "3年間のC++開発経験とセキュリティ専門知識を基に、安全で効率的なソリューションを作成する開発者です。",
    learnMore: "詳しく見る",
    getInTouch: "お問い合わせ",
    experienceHighlight: "3年の実務経験",
    experienceHighlightDesc: "Innotiumでランサムウェア防御ソリューションを開発し、CC認証を取得",
    skillsHighlight: "多様な技術スタック",
    skillsHighlightDesc: "C/C++、クラウド、セキュリティなど幅広い技術能力を保有",
    securityHighlight: "セキュリティ専門性",
    securityHighlightDesc: "ランサムウェア対応およびセキュリティ認証の経験",
    viewDetails: "詳細を見る",
    currentStatus: "現在の活動",
    bobTitle: "Best of Best 14期",
    bobTrack: "セキュリティ製品開発トラック",
    bobStatus: "研修中 (2025.07 ~ 2026.03)",
    innotiumStatus: "ランサムウェア防御ソリューション開発 (2022.05 ~ 2025.06)",
    
    // BoB
    bobDescription: "次世代セキュリティリーダー育成プログラム、セキュリティ製品開発トラックに参加中",
    bobDetail1: "高度なセキュリティ製品開発コース",
    bobDetail2: "実践プロジェクトとメンタリング",
    bobDetail3: "セキュリティ専門家ネットワーク",
    
    // CC Certification
    ccCertification: "ランサムウェア防御ソリューション(C++)のメイン開発者として、セキュリティ機能確認証明書(CC認証)を取得しました。",
    
    // About Page
    aboutMe: "私について",
    aboutDetail1: "私は問題解決に情熱を持つ開発者です。複雑な問題をシンプルで効率的なコードで解決するプロセスを楽しみ、常により良いアプローチを考えています。",
    aboutDetail2: "セキュリティへの深い関心に基づいて、安全なソフトウェアを作成するよう努めており、Best of Bestプログラムを通じて専門性をさらに強化しています。",
    personalInfo: "個人情報",
    birthDate: "生年月日",
    location: "所在地",
    locationValue: "韓国",
    email: "メールアドレス",
    values: "コアバリュー",
    value1Title: "問題解決",
    value1Desc: "複雑な問題を論理的に分析し、効率的に解決します。",
    value2Title: "継続的な学習",
    value2Desc: "新しい技術と知識を絶えず習得して成長します。",
    value3Title: "協業とコミュニケーション",
    value3Desc: "チームメンバーと積極的にコミュニケーションを取り、共に成長します。",
    
    // Skills Page Details
    cppDescription: "システムプログラミングとパフォーマンス最適化に強みを持っています。",
    jsDescription: "フロントエンド開発とNode.jsバックエンド開発の経験があります。",
    swiftDescription: "macOSネイティブアプリケーション開発の経験があります。",
    windowsDescription: "Windowsカーネルドライバーとシステムプログラミングの経験",
    linuxDescription: "LinuxシステムプログラミングとX11開発の経験",
    openOSDescription: "オープンOS環境でのソフトウェア開発経験",
    macOSDescription: "macOSネイティブアプリケーション開発の経験",
    ec2Description: "サーバーインスタンス管理とデプロイ自動化",
    s3Description: "大容量ファイルストレージとバックアップシステムの実装",
    rdsDescription: "データベース管理と最適化",
    x11Description: "Linux GUIアプリケーション開発",
    appKitDescription: "macOSネイティブUI開発",
    mssqlDescription: "データベース設計とクエリ最適化",
    idcDescription: "物理サーバー管理とネットワーク構成",
    loadBalanceDescription: "トラフィック分散と高可用性システムの実装",
    raidDescription: "データの安定性とパフォーマンス最適化",
    networkTrafficDescription: "ネットワークパフォーマンスの監視と最適化",
    ransomwareResponseDesc: "ランサムウェア攻撃の分析と対応戦略の策定",
    vulnerabilityAnalysisDesc: "システム脆弱性分析とセキュリティパッチ",
    ccCertificationSkill: "CC認証（セキュリティ機能確認）",
    ccCertificationDesc: "セキュリティ製品認証プロセスの経験と文書化",
    
    // Contact Page
    contactIntro: "プロジェクトコラボレーションや技術的なお問い合わせはお気軽にご連絡ください！",
    emailDescription: "最も早く返信を受け取る方法です。",
    githubDescription: "私が参加したプロジェクトをご覧ください。",
    linkedinDescription: "プロフェッショナルネットワークを通じて接続してください。",
    sendMessage: "メッセージを送る",
    yourName: "お名前",
    yourEmail: "メールアドレス",
    subject: "件名",
    message: "メッセージ",
    namePlaceholder: "山田太郎",
    emailPlaceholder: "example@email.com",
    subjectPlaceholder: "件名を入力してください",
    messagePlaceholder: "メッセージを入力してください",
    sendButton: "送信",
    
    // Additional translations
    education: "コンピュータ工学専攻",
    yearsExperience: "年の経験",
    skillsIntro: "多様な技術スタックを基に安定的で効率的なシステムを構築します。",
    expert: "エキスパート",
    intermediate: "中級",
    inProgress: "進行中",
    emailPreferred: "優先連絡手段",
    viewProjects: "プロジェクトを見る",
    professionalNetwork: "プロフェッショナルネットワーク",
    contactCTA: "新しい機会と挑戦を歓迎します！"
  }
};

export default translations;