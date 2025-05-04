### 📘 **JavaScript `fetch()` – Notes**

---

### ✅ **Basic Syntax**

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));
```

Or with `async/await`:

```js
const response = await fetch(url, options);
const data = await response.json();
```

---

### ⚙️ **Options Object**

```js
{
  method: "GET" | "POST" | "PUT" | "DELETE" | etc.,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data) // for POST/PUT
}
```

---

### 📡 **Common HTTP Methods**

* `GET` – Retrieve data
* `POST` – Send data (e.g. form, JSON)
* `PUT` – Update existing data
* `DELETE` – Remove data

---

### 📥 **Send JSON Data (POST)**

```js
await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
});
```

---

### ⚠️ **Important Notes**

* `fetch()` does **not throw** on HTTP errors like 404/500
* Use `response.ok` or `response.status` to check success
* Use `await response.json()` (or `.text()`, `.blob()`, etc.)

---

### 🚨 **Error Handling**

```js
if (!response.ok) {
  throw new Error("HTTP Error: " + response.status);
}
```

---

### 📤 **Send Form Data**

```js
const formData = new FormData();
formData.append("name", "John");

await fetch(url, {
  method: "POST",
  body: formData,
});
```

---

### 📁 **Upload Files**

```js
const formData = new FormData();
formData.append("file", fileInput.files[0]);

await fetch(url, {
  method: "POST",
  body: formData,
});
```

---

### ✅ **Check Response Types**

* `await response.json()` – JSON
* `await response.text()` – plain text
* `await response.blob()` – binary files
* `await response.formData()` – Form data