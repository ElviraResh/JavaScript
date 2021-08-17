# [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 

**Document Object Model ( DOM )** связывает веб - страницы со скриптами или языками программирования, представляя структуру документа, такие как HTML , представляющий собой веб - страницы памяти. Обычно это относится к JavaScript, хотя моделирование документов HTML, SVG или XML как объектов не является частью основного языка JavaScript.

DOM представляет собой документ с логическим деревом. Каждая ветвь дерева заканчивается узлом, и каждый узел содержит объекты. Методы DOM обеспечивают программный доступ к дереву. С их помощью вы можете изменить структуру, стиль или содержимое документа.

К узлам также могут быть прикреплены обработчики событий. Как только событие запускается, обработчики событий запускаются.

### DOM-интерфейсы
* [Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr)
* [CDATASection](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection)
* [CharacterData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData)
* [Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment)
* [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
* [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
* [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
* [DocumentType](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType)
* [DOMError](https://developer.mozilla.org/en-US/docs/Web/API/DOMError) - **delete**
* [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)
* [DOMImplementation](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation)
* [DOMString](https://developer.mozilla.org/en-US/docs/Web/API/DOMString)
* [DOMTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMTimeStamp)
* [DOMStringList](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringList)
* [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)
* [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
* [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
* [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
* [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
* [MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord)
* [NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap)
* [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
* [NodeFilter](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter)
* [NodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator)
* [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
* [ProcessingInstruction](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction)
* [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection) - **experimental**
* [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range)
* [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text)
* [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) - **experimental**
* [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) - **experimental**
* [TimeRanges](https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges)
* [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)
* [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
* [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
* [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker)
* [XMLDocument](https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument) - **experimental**

# [DNS](https://guides.hexlet.io/dns/) 
**Домен (доменное имя)** — символьное имя для обозначения сервера в сети интернет. Доменные имена являются иерархической структурой, в которой каждый уровень отделяется точкой. Основными уровнями являются:

* Корневой домен. В урле он не используется, но всегда подразумевается. От него начинается построение всех урлов в сети интернет
* Домены верхнего уровня. К ним относятся домены .ru, .com, .net, .su и так далее. Также этот домен называют доменом первого уровня.
* Домен второго уровня (или основной домен). Это основное имя вашего сайта
* Поддомены (домены третьего, четвёртого, пятого и т.д. уровня). Сюда входят все поддомены основного домена.

**DNS-сервер** — система, ответственная за хранение и поддержание в актуальном состоянии записей о своих дочерних доменах. Каждый DNS-сервер ответственен только за свою зону, то есть DNS-сервер домена .io знает о том, где расположен домен hexlet, DNS-сервер которого знает о расположении своих поддоменов.

**Корневой DNS-сервер** — система, знающая расположение (IP-адреса) DNS-серверов доменов верхнего уровня.

**Ресурсная запись** — единица информации DNS-сервера. Каждая ресурсная запись имеет несколько полей:

* Имя (домен, к которому относится запись)
* Тип
* Параметры
* Значение

[**Весёлый комикс про то, как работает DNS**](https://howdns.works/)
