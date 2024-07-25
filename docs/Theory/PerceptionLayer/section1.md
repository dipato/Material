---
sidebar_position: 1
sidebar_label: Section 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IdealImage from '@site/src/components/IdealImage';


# Perception Layer - Section 1
<div style={{ textAlign: "justify" }}>
:::note[**Objetives**]
* Review the basic components of an IoT system
* Explore the basic components that make up the concept of a thing
* Discuss the development software to be used
* Research the development systems available in the laboratory
:::

## Main References

:::info
For more information please go to **"A deeper dive into IoT"** ([lesson 2](https://github.com/microsoft/IoT-For-Beginners/blob/main/1-getting-started/lessons/2-deeper-dive/README.md)) from the Microsoft course **"IoT for Beginners"** ([link](https://github.com/microsoft/IoT-For-Beginners)).
:::

## Contextualization

The following is a typical case in which the concepts covered throughout the course will be applied. The system presented (by **Curtin University** (https://www.curtin.edu.au/)) consists of a real-time control system to remotely guide a marble through a maze. The block diagram illustrating the architecture of this system is shown below:

<IdealImage 
    src={require('@site/static/img/IoT-example.png').default} 
    alt="IoT-example" 
    className="custom-img" 
    caption="Sorce: Curtin University" 
/>

The following video shows the operation of this system:

<div style={{ textAlign: 'center' }}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ErS2W58StIs?si=a5B0oVeiGXwS7KaK"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>



## Components of an IoT Application

Considering the previously presented use case, we will analyze the different concepts and components needed to build an IoT application as shown in the following image:

<IdealImage 
    src={require('@site/static/img/componentes_iot_apps.png').default} 
    alt="componentes_iot_apps.png" 
    className="custom-img" 
    caption="Source: Components of IoT Apps, <a href='https://github.com/microsoft/IoT-For-Beginners/blob/main/slides/lesson-2.pdf'>IoT-For-Beginners</a>." 
/>

A **Thing** refers to a device that interacts with the physical world through sensors and actuators. To learn how to develop IoT applications, the first step is to have an IoT development kit. It consists of several general-purpose IoT devices (with features that production devices do not have, such as external pins for connecting to sensors and actuators, and additional hardware for debugging support, among other things) used by developers for prototyping. There are two types of development kits:

* **Single-Board Computer**
  
<IdealImage 
    src={require('@site/static/img/Perception/raspberry-pi-4.jpg').default} 
    alt="raspberry-pi-4" 
    className="custom-img" 
    caption="This Photo by Unknown Author is licensed under CC BY-SA" 
/>

* **Microcontrollers**
  
 <!-- <Image img={require('/img/sesiones/percepcion/1/uno-r3.jpg')} />-->
 <IdealImage 
    src={require('@site/static/img/Perception/uno-r3.jpg').default} 
    alt="raspberry-pi-4" 
    className="custom-img" 
    caption="This Photo by Unknown Author is licensed under CC BY-SA" 
/>

## Available development boards

<Tabs groupId="placas">
  <TabItem value="arduino_uno" label="Arduino UNO">
        
        The following shows the **Arduino UNO**:
        
        <IdealImage 
            src={require('@site/static/img/Perception/uno-r3.jpg').default} 
            alt="uno-r3" 
            className="custom-img" 
            caption="This Photo by Unknown Author is licensed under CC BY-SA" 
        />
                    
        The following table summarizes the main features of the Arduino UNO board available in the laboratory:

        <div className="table-container">

        |Item |Arduino UNO|
        |---|---|
        |Microcontroller |ATmega328P (Atmel)|
        |Microprocessor |ATMega 16U2|
        |I/O Voltage |5 V|
        |Input voltage (nominal) |7 - 12 V (Power jack)|
        |Power jack | yes|
        |Power supply (Vin)||
        |Input/Output Voltage |5 V|
        |ADC reference voltage| 5V|
        |DC Current per I/O Pin| 20 mA|
        |Built-in LED Pin |13|
        |Digital I/O Pins |14 (I/O)|
        |Analog input pins |6 (ADC 10-bit)|
        |PWM pins| 6|
        |UART| yes|
        |I2C| yes|
        |SPI| yes|
        |I2S|| 
        |WIFI| no|
        |Bluetooth| no|
        |Programmable | Arduino IDE, Micropython, VS Code|
        |Brand | Arduino|

        </div>

  </TabItem>
  <TabItem value="esp8266" label="ESP8266">

        The following shows the board **NodeMCU ESP8266**:

         <IdealImage 
            src={require('@site/static/img/Perception/NodeMcuV3_1.jpg').default} 
            alt="uno-r3" 
            className="custom-img" 
            caption="This Photo by Unknown Author is licensed under CC BY-SA" 
        />

        The following table summarizes the main features of the ESP8266 board available in the laboratory:

        |Item |ESP8266|
        |---|---|
        |Microcontroller |SoC ESP9266EX|
        |Microprocessor |Tensilica's L106 Diamond series 32-bit|
        |I/O Voltage |5 V|
        |Input voltage (nominal) |5 - 12 V (VIN, VCC)|
        |Power jack | no|
        |Power supply (Vin)|5 V (VIN)|
        |Input/Output Voltage |3.3 V|
        |ADC reference Voltage|3.3 V|
        |DC Current per I/O Pin| 12 mA|
        |Built-in LED Pin |---|
        |Digital I/O Pins |9 (GPIO)|
        |Analog input pins |1|
        |PWM pins| 4|
        |UART| yes|
        |I2C| yes|
        |SPI| yes|
        |I2S| yes| 
        |WIFI| IEEE 802.11 b/g/n|
        |Bluetooth| no|
        |Programmable | Arduino IDE, Micropython, VS Code|
        |Brand | Ai-Thinker|
  </TabItem>

<TabItem value="esp32" label="ESP32">

        The following shows the board **ESP32**:

        <IdealImage 
            src={require('@site/static/img/Perception/esp32.png').default} 
            alt="uno-r3" 
            className="custom-img" 
            caption="This Photo by Unknown Author is licensed under CC BY-SA" 
        />

        The following table summarizes the main features of the ESP32 board available in the laboratory:

        |Item |ESP32|
        |---|---|
        |Microcontroller |SoC ESP32|
        |Microprocessor |Xtensa single-/dual-core 32-bit LX6|
        |I/O Voltage |5 V|
        |Input voltage (nominal) |---|
        |Power jack | no|
        |Power supply (Vin)|3.3 V (VIN)|
        |Input/Output Voltage |3.3 V|
        |ADC reference voltage| |
        |DC Current per I/O Pin| 12 mA|
        |Built-in LED Pin ||
        |Digital I/O Pins |24 (GPIO - Algunos pines solo como entrada)|
        |Analog input pins |2 (8-bit)|
        |PWM pins| 4|
        |UART| yes|
        |I2C| yes|
        |SPI| yes|
        |I2S| | 
        |WIFI| IEEE 802.11 b/g/n|
        |Bluetooth| yes|
        |Programmable | Arduino IDE, Micropython, VS Code|
        |Brand | Ai-Thinker|
</TabItem>

<TabItem value="arduino_nano" label="ARDUINO NANO 33 BLE Sense Lite">

    The Arduino Nano 33 BLE Sense board ([datasheet](https://docs.arduino.cc/resources/datasheets/ABX00031-datasheet.pdf)) is based in the microcontroller nRF52840 ([datasheet](https://content.arduino.cc/assets/Nano_BLE_MCU-nRF52840_PS_v1.1.pdf)).
     
    <IdealImage 
        src={require('@site/static/img/Perception/arduino_nano33_ble.jpg').default} 
        alt="uno-r3" 
        className="custom-img" 
        caption="This Photo by Unknown Author is licensed under CC BY-SA" 
    />

     The following table summarizes the main features of the Arduino Nano 33 BLE Sense board available in the laboratory:

     |Item |Arduino Nano 33 BLE Sense|
    |---|---|
    |Microcontroller|	nRF52840 ([datasheet](https://content.arduino.cc/assets/Nano_BLE_MCU-nRF52840_PS_v1.1.pdf))|
    |Operating Voltage|	3.3V|
    |Input Voltage (limit)|	21V|
    |DC Current per I/O Pin|	15 mA|
    |Clock Speed	|64MHz|
    |CPU Flash Memory	1MB |(nRF52840)|
    |SRAM|	256KB (nRF52840)|
    |EEPROM|	none|
    |Digital Input / Output Pins|	14|
    |PWM Pins|	all digital pins|
    |UART|	1|
    |SPI|	1|
    |I2C|	1|
    |Analog Input Pins|	8 (ADC 12 bit 200 ksamples)|
    |Analog Output Pins|	Only through PWM (no DAC)|
    |External Interrupts	|all digital pins|
    |LED_BUILTIN|	13|
    |USB	|Native in the nRF52840 Processor|
    |IMU|	LSM9DS1 ([datasheet](https://content.arduino.cc/assets/Nano_BLE_Sense_lsm9ds1.pdf))|
    |Microphone|	MP34DT05 ([datasheet](https://content.arduino.cc/assets/Nano_BLE_Sense_mp34dt05-a.pdf))|
    |Gesture, light, proximity|	APDS9960 ([datasheet](https://content.arduino.cc/assets/Nano_BLE_Sense_av02-4191en_ds_apds-9960.pdf))|
    |Barometric pressure	|LPS22HB ([datasheet](https://content.arduino.cc/assets/Nano_BLE_Sense_lps22hb.pdf))|
    |Temperature, humidity|	HTS221 ([datasheet](https://content.arduino.cc/assets/Nano_BLE_Sense_HTS221.pdf))|
    |Size (length × width) |45 mm × 18 mm|

    Unlike the other systems available in the laboratory, the Arduino Nano 33 BLE Sense has some integrated sensors that can be used for IoT solutions.

    
    > **Important**: There are different versions of the Arduino Nano 33 BLE Sense (known as "revisions": NANO 33 BLE SENSE and NANO 33 BLE SENSE REV2). Both use the nRF52840 as the processor, but the sensors are different. Therefore, it is important to be careful when choosing the correct version with the board you will be working with in the Arduino IDE.
    
</TabItem>
</Tabs>

## Sobre los componentes

### Fabricantes

En la siguiente tabla se muestran algunas de las principales empresas que se dedican a la fabricación de modulos para prototipado IoT:

|Fabricante|Link|
|---|---|
|Adafruit Industries|https://www.adafruit.com/|
|SparkFun Electronics|https://www.sparkfun.com/|
|dfrobot|https://www.dfrobot.com/|
|Seeeed Studio|https://www.seeedstudio.com/|
|Elegoo|https://www.elegoo.com/|

Ademas de la fabricación, tambien documentan y muestran ejemplos demostrativos de como usar los componentes que allí se fabrican.

### Distribuidores

Si lo que se quiere es comprar son componentes electronicos existen distribuidores para ello, en la siguiente tabla se muestran algunos de los principales distribuidores de componentes a nivel mundial (tomados de la pagina **2023 Top 50 Electronics Distributors List** ([link](https://www.supplychainconnect.com/rankings-research/article/21264998/2023-top-50-electronics-distributors-list))):

|Distribuidores|Link|
|---|---|
|Mouser Electronics|https://www.mouser.com/|
|DigiKey Corporation|https://www.digikey.com/|
|Arrow Electronics|https://www.arrow.com/|
|WPG Holdings|https://www.wpgholdings.com/main/index/en|
|Avnet|https://www.avnet.com/wps/portal/us/|
|Future Electronics|https://www.futureelectronics.com/|

En el caso colombiano, la siguiente lista (tomada del foro **Listado de proveedores de Electrónica - Colombia** ([link](https://www.forosdeelectronica.com/resources/listado-de-proveedores-de-electr%C3%B3nica-colombia.105/))) contiene algunos de los distribuidores en Colombia:

|Distribuidores|Link|
|---|---|
|I + D|https://didacticaselectronicas.com/|
|Sigma Electronica|https://www.sigmaelectronica.net/|
|Electronilab|https://electronilab.co/|
|Suconel|https://suconel.com/|
|La Red Electronica|https://laredelectronica.com/|

## Actividad para la proxima sección

1. Instalar en su maquina los siguientes programas:
   - [x] Arduino IDE
   - [x] Visual Studio Code
   - [x] Platformio (Complemento de Visual Studio Code)
   - [x] Fritzing
   - [x] draw.io
   - [ ] Mosquito
   - [ ] Mqtt explorer 
   - [ ] Node-red 
   
   Para mas información sobre estas puede consultar el siguiente [link](https://udea-iot.gitbook.io/introduccion-al-iot/pasos-previos/herramientas-necesarias/software)

2. A continuación se listan los directorios de cada uno de los proyectos a trabajar a lo largo del semestre. Teniendo en cuenta las instrucciones dadas en clase editar el archivo **README.md** disponible dentro de cada directorio (para ver la sintaxis markdown puede consultar el siguiente [link](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)). 

</div>