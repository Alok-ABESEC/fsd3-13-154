# FS (File System)

it direct connect with client OS rater than browser

## Major task of FS Module

- Reading and writing files
  - readFile()
  - writeFile()
  - appendFile()
- Directory Management
  - mkdir()
  - rmdir() - depricated
  - rm()
  - readdir()

- Metadata/Information
  - stat()
  - lstat()
  - fstat()
- watching for Changes
  - watch()
  - watchFile()
  - unwatchFile()
- Streaming Large File
  - createReadStream()
  - CreateWriteStream()
- File Operations
  - rename () 
  - truncate()
  - unlink()
  - link()
  - syslink()
  ## crud operation

  create/insert,read/retrieve,update,delete
  ## item

  id,name,price,qty
  ## operations

  1.add to cart
  2.show cart
  3.remove from cart
  4.update quantity from cart
  5.checkout
  NOTE:all items will be stored in hdd,so after termination of program we can retrieve cart
  ## required files
  1.crude.js- it contains all the methods and entry point
  2.products.json

