export const modelsData = {
  "modeloOSI": [
    {
      "capa": 1,
      "nombre": "Física",
      "color": "#0a6789",
      "descripcion": "Los bits se convierten en señales eléctricas, ópticas o electromagnéticas para su transmisión a través del medio físico. Se definen los niveles de voltaje, temporización, conectores y características de la señal que representan los 1s y 0s.",
      "protocolos": ["Ethernet (nivel físico)", "RS-232", "DSL", "IEEE 802.3", "USB"],
      "dispositivos": ["Cables UTP", "Fibra óptica", "Coaxial", "Repetidores", "Hubs", "Modems"],
      "conceptosClave": ["Señales analógicas", "Señales digitales", "Codificación de línea", "Atenuación", "Velocidad de transmisión", "Medios de transmisión"]
    },
    {
      "capa": 2,
      "nombre": "Enlace de Datos",
      "color": "#0a996f",
      "descripcion": "Los bits se organizan en tramas con direcciones MAC de origen y destino. Se añaden mecanismos de detección de errores (como CRC) y control de acceso al medio. Las tramas se envían entre dispositivos directamente conectados.",
      "protocolos": ["Ethernet", "PPP", "HDLC", "Frame Relay", "IEEE 802.11"],
      "dispositivos": ["Switches", "Bridges", "Tarjetas de red (NIC)"],
      "conceptosClave": ["Tramas", "Dirección MAC", "Control de flujo", "Detección de errores", "CRC", "ARP"]
    },
    {
      "capa": 3,
      "nombre": "Red",
      "color": "#0a8969",
      "descripcion": "Los datos se encapsulan en paquetes con direcciones IP de origen y destino. Se determina la ruta óptima a través de la red utilizando tablas de enrutamiento. Los paquetes pueden ser fragmentados y reensamblados según sea necesario.",
      "protocolos": ["IPv4", "IPv6", "ICMP", "IGMP", "IPsec"],
      "dispositivos": ["Routers", "Gateways", "Firewalls de nivel 3"],
      "conceptosClave": ["Direcciones IP", "Subnetting", "NAT", "Routing", "RIP", "OSPF", "BGP"]
    },
    {
      "capa": 4,
      "nombre": "Transporte",
      "color": "#f8c200ff",
      "descripcion": "Los datos se dividen en segmentos (TCP) o datagramas (UDP) con números de puerto para identificar aplicaciones. TCP establece conexiones confiables con control de flujo, retransmisiones y confirmaciones, mientras que UDP ofrece un servicio sin conexión.",
      "protocolos": ["TCP", "UDP", "SCTP", "DCCP"],
      "dispositivos": ["Balanceadores de carga", "Firewalls de nivel 4"],
      "conceptosClave": ["Segmentos", "Puertos", "Handshake de 3 vías", "Control de congestión", "Fiabilidad vs velocidad"]
    },
    {
      "capa": 5,
      "nombre": "Sesión",
      "color": "#fa6632",
      "descripcion": "Se establece, mantiene y finaliza el diálogo entre aplicaciones. Los datos se sincronizan mediante puntos de control que permiten reanudar la comunicación después de interrupciones. Se gestionan los modos de comunicación (simplex, half-duplex, full-duplex).",
      "protocolos": ["NetBIOS", "RPC", "PPTP", "SMB"],
      "dispositivos": ["Servidores de autenticación", "Gateways de aplicaciones"],
      "conceptosClave": ["Control de sesión", "Puntos de sincronización", "Full-duplex", "Half-duplex"]
    },
    {
      "capa": 6,
      "nombre": "Presentación",
      "color": "#e85529",
      "descripcion": "Los datos se traducen entre diferentes formatos, se comprimen para reducir el tamaño y se cifran/descifran para garantizar la seguridad. Se maneja la codificación de caracteres y la conversión entre representaciones de datos.",
      "protocolos": ["SSL", "TLS", "JPEG", "GIF", "PNG", "ASCII", "MPEG"],
      "dispositivos": ["Servidores de cifrado", "Middleware"],
      "conceptosClave": ["Codificación de caracteres", "Compresión", "Encriptación", "Certificados", "Conversión de formatos"]
    },
    {
      "capa": 7,
      "nombre": "Aplicación",
      "color": "#cf0638",
      "descripcion": "Los datos se presentan en formatos comprensibles para el usuario final (HTML, JSON, XML, etc.). Las aplicaciones interactúan directamente con los protocolos de red para enviar y recibir información según servicios específicos (web, correo, transferencia de archivos).",
      "protocolos": ["HTTP", "HTTPS", "FTP", "SMTP", "POP3", "IMAP", "DNS", "SNMP", "Telnet", "SSH"],
      "dispositivos": ["Servidores web", "Servidores DNS", "Servidores de correo"],
      "conceptosClave": ["APIs", "Cookies", "Sesiones", "Resolución de nombres", "Servicios distribuidos"]
    }
  ],
  "modeloTCPIP": [
    {
      "capa": 1,
      "nombre": "Acceso a la Red",
      "color": "#0a6789",
      "descripcion": "Los bits se convierten en señales adecuadas para el medio de transmisión y se organizan en tramas con direcciones físicas. Se controla el acceso al medio compartido y se detectan/corrigen errores a nivel de enlace.",
      "protocolos": ["Ethernet", "Wi-Fi", "ARP", "PPP", "ATM"],
      "dispositivos": ["Switches", "Hubs", "NICs", "Repetidores"],
      "conceptosClave": ["Direcciones MAC", "Tramas", "Control de acceso al medio", "MTU"]
    },
    {
      "capa": 2,
      "nombre": "Internet",
      "color": "#0a8969",
      "descripcion": "Los datos se encapsulan en paquetes IP con direcciones lógicas de origen y destino. Los routers examinan las direcciones IP para determinar la mejor ruta de envío a través de múltiples redes. Los paquetes pueden ser fragmentados y sometidos a NAT/PAT.",
      "protocolos": ["IPv4", "IPv6", "ICMP", "IGMP", "IPsec"],
      "dispositivos": ["Routers", "Firewalls", "Gateways"],
      "conceptosClave": ["Direcciones IP", "Enrutamiento", "Fragmentación de paquetes", "NAT", "PAT"]
    },
    {
      "capa": 3,
      "nombre": "Transporte",
      "color": "#f8c200ff",
      "descripcion": "Los datos de aplicación se dividen en segmentos (TCP) o datagramas (UDP) con números de puerto. TCP establece conexiones, garantiza la entrega ordenada mediante secuenciamiento y usa confirmaciones/retransmisiones para fiabilidad. UDP ofrece entrega simple sin garantías.",
      "protocolos": ["TCP", "UDP", "SCTP"],
      "dispositivos": ["Balanceadores de carga", "Firewalls de nivel 4"],
      "conceptosClave": ["Puertos", "Segmentos", "Datagramas", "Handshake TCP", "Fiabilidad vs velocidad"]
    },
    {
      "capa": 4,
      "nombre": "Aplicación",
      "color": "#cf0638",
      "descripcion": "Los datos se formatean según protocolos específicos de aplicación (HTTP, SMTP, FTP, etc.). Se manejan la codificación, compresión, cifrado y representación de datos para su interpretación por las aplicaciones finales. Se gestionan sesiones y autenticación.",
      "protocolos": ["HTTP", "HTTPS", "FTP", "SMTP", "DNS", "SNMP", "Telnet", "SSH"],
      "dispositivos": ["Servidores web", "Servidores DNS", "Proxies", "APIs"],
      "conceptosClave": ["Servicios cliente-servidor", "APIs REST", "APIs SOAP", "Cifrado TLS/SSL", "Cookies", "Sesiones"]
    }
  ]
};