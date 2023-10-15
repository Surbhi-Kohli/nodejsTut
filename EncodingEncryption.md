Encoding data is a process involving changing data into a new format using a scheme. Encoding is a reversible process and data can be encoded to a new format and decoded to its original format. Encoding typically involves a publicly available scheme that is easily reversed. Encoding is not used to protect or secure data because it is easy to reverse.

    Encoding is a fundamental concept in computer science and data processing that serves several important purposes. Encoding is the process of converting data from one format to another, and it is necessary for various reasons:

Data Representation: Encoding allows you to represent data in a structured format that can be processed by computers. It provides a consistent and organized way to represent various types of information, such as text, numbers, and multimedia data.

Data Transmission: When data is transmitted between systems or over a network, it needs to be in a format that can be easily understood by both the sender and the receiver. Encoding ensures that data is packaged and sent in a standardized way, making communication between different systems possible.

Data Storage: Data is often stored in a variety of formats and structures, depending on the storage medium and the specific requirements. Encoding helps transform data into a storage-friendly format, ensuring efficient use of storage resources.

Data Compression: Encoding techniques, such as lossless and lossy compression, reduce the amount of data needed to represent information. This is crucial for conserving storage space and improving data transfer efficiency. For example, image and video files are often compressed using encoding techniques.

Data Security: Some forms of encoding, such as encryption, are used to protect sensitive data from unauthorized access. Encryption transforms data into a secure format that can only be decrypted with the appropriate key.(So in a way encryption is a specific type of encoding)

Character and Symbol Representation: Different languages and scripts use different characters and symbols. Encoding standards like Unicode enable the representation of a wide range of characters and symbols to support multilingual and international communication.

Interoperability: Encoding helps different systems and software applications understand and work with each other's data. It facilitates data exchange and interoperability between heterogeneous systems.

Error Detection and Correction: Some encoding schemes incorporate error-detection and error-correction mechanisms to ensure the integrity of transmitted data, making it less susceptible to corruption during transmission.

Normalization: Encoding can be used to normalize data, ensuring that it follows a consistent format and structure. This is essential for data analysis and processing.

In summary, encoding is a critical component of data processing and communication in the digital world. It plays a role in data representation, transmission, storage, security, and interoperability, among other functions. The choice of encoding method depends on the specific requirements and constraints of the data and the systems that handle it.

## What is character encoding?(used in fileRead,write in nodejs)
An encoding defines a mapping between bytes and text.Character encoding is the process of assigning numbers to graphical characters, especially the written characters of human language, allowing them to be stored, transmitted, and transformed using digital computers.[1] The numerical values that make up a character encoding are known as "code points" and collectively comprise a "code space", a "code page", or a "character map".


As we all know, computers do not understand the English alphabet, numbers except 0 and 1, or text symbols. We use encoding to convert these. So, encoding is the method or process of converting a series of characters, i.e, letters, numbers, punctuation, and symbols into a special or unique format for transmission or storage in computers. All types of data, including numbers, text, photos, audio, and video files, can be handled by computers. For example, 65 is represented as A because all the characters, symbols, numbers are assigned some unique code by the standard encoding schemes. 

**Unicode**(Containes all possible characters in all languages) is a universal character set, ie. a standard that defines, in one place, all the characters needed for writing the majority of living languages in use on computers. It aims to be, and to a large extent already is, a superset of all other character sets that have been encoded.

Unicode is a standard with the goal to cover all possible characters in the world. In Unicode, a letter maps to something called a code point. One advantage of Unicode over other possible sets is that the first 256 code points are identical to ISO-8859–1, and hence also ASCII. Here are some code points of Unicode :

H : U+0048

e : U+0065
The code points are ‘U+number’? Then how thus the computer interprets them? Well, there comes encoding.


In Unicode, a letter maps to something called a code point which is still just a theoretical concept. How that code point is represented in memory or on disk is a whole nuther story.

Encoding for unicode characters: UTF-8(In UTF-8, every code point from 0-127 is stored in a single byte. Only code points 128 and above are stored using 2, 3, in fact, up to 6 bytes.),UTF-16

UTF-8
UTF-8 is a system for storing your string of Unicode code points, those magic U+ numbers, in memory using 8-bit bytes. In UTF-8, every code point from 0–127 is stored in a single byte. Only code points 128 and above are stored using 2 to 4 bytes.

Memory considerations :

1 byte: Standard ASCII
2 bytes: Arabic, Hebrew, most European scripts
3 bytes: Basic Multilingual Plane (BMP)
4 bytes: All Unicode characters
For the standard ASCII (0–127) characters, the UTF-8 codes are identical. This makes UTF-8 ideal if backwards compatibility is required with existing ASCII text. Other characters require anywhere from 2–4 bytes. This is done by reserving some bits in each of these bytes to indicate that it is part of a multi-byte character. In particular, the first bit of each byte is 1 to avoid clashing with the ASCII characters.

It does not make sense to have a string without knowing what encoding it uses.
 if a character encoded in UTF8 is decoded in UTF16 it changes. Also if the character is not the part of the character set like in the example it is not a part of ASCII, it is still encoded & when decoded gives a character in the ASCII character set.

 Recommended/default/dominant encodings:
When given a choice of which UTF to use, it is usually best to follow recommended standards for the environment you are working in. For example, UTF-8 is dominant on the web, and since HTML5, it has been the recommended encoding. 
 if we use UTF16 encoding for a ASCII character like A, it uses 2 bytes but encoding it in UTF8 uses only uses one byte. Hence UTF8 is good in case of memory management when a lot of ASCII characters are to be used with other characters. But at times UTF8 uses more bytes than UTF16 like in the example below:

 Conclusion:If you have a string, in memory, in a file, or in an email message, you have to know what encoding it is in or you cannot interpret it or display it to users correctly.

 Refernce:https://medium.com/@akshaykumar.bajaj.17/utf-8-what-it-is-why-it-is-important-4a467fd81466
 
 https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/
