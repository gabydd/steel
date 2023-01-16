
;; TODO:
;; Parse the arguments from the command line, in this case either grab the path to the directory, or a git url, or the local directory
;; Parse the cog file, and check the dependencies. If any need to be downloaded, fetch those
;; Install to $STEEL_PATH/cogs to make it available for anything to download
;; Version resolution... for now just assume everything is compatible with everything without versions

;; Load in contracts for stress testing
(require "../self_hosted/contract.scm" 
        (for-syntax "../self_hosted/contract.scm")
        "steel/result")

(define *STEEL_HOME* (~> "STEEL_HOME" 
                         (env-var)
                         (unwrap-ok)
                         (string-append "/cogs")))


(define/c (parse-cog module)
    (->c string? list?)
    (if (is-dir? module)
        (let ((cog-path (string-append module "/cog.scm")))
            (if (is-file? cog-path)
                ;; Update the resulting map with the path to the module
                (list (hash-insert (parse-cog-file cog-path) 'path module))

                (hash-values->list
                    (discover-cogs module))

                ; (error! "Unable to locate the cog file for module: " module)
                
                
                
                ))
        (error! "Unable to locate the module " module)))

;; Parses a cog file directly into a hashmap
(define/c (parse-cog-file path)
    (->c string? hash?)
    (define contents (let ((file (open-input-file path))) (read-port-to-string file)))
    (transduce (read! contents)
               (mapping cdr)
               (into-hashmap)))

;; Discover the cogs located at the path, return as a list of hash maps
(define/c (discover-cogs path)
    (->c string? hash?)
    (transduce (read-dir path)
               (filtering is-dir?)
               (mapping parse-cog)
               (flattening)
               (mapping (lambda (package) (list (hash-get package 'package-name) package)))
               (into-hashmap)))

;; Given a package spec, install that package directly to the file system
(define/c (install-package package)
    (->c hash? string?)
    (define destination (~> *STEEL_HOME*
                            (string-append "/")
                            (string-append (symbol->string (hash-get package 'package-name)))))
    (copy-directory-recursively! (hash-get package 'path) destination)
    destination)

; (displayln (discover-cogs *STEEL_HOME*))

(define (main)
    ;; Grab the cog to install to the file system
    (define cog-to-install (car (parse-cog "foo")))
    ;; Grab the map of installed cogs on the file system.
    ;; We will check if the cog is already installed before patching over the directory
    (define installed-cogs (discover-cogs *STEEL_HOME*))

    (displayln installed-cogs)

    (if (hash-contains? installed-cogs (hash-get cog-to-install 'package-name))
        (begin
            (displayln "Package already installed...")
            (displayln "Overwriting existing package installation...")
            (let ((output-dir (install-package cog-to-install)))
                (display "Installed package to")
                (displayln output-dir)))

        (begin
            (displayln "Package is not currently installed.")
            (let ((output-dir (install-package cog-to-install)))
                (display "Installed package to ")
                (displayln output-dir)))))

(main)


; (parse-cog-file ".")

; (displayln (discover-cogs "."))


; (displayln (discover-cogs '()))


; (define module-to-install "foo")

; (define check-installed-modules)

; (env-var )