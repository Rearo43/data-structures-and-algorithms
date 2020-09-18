# `Quick Sort`    
> [code](merge-sort.test.js)


            Compare pivot to L when L> pivot STOP and switch the values.
            [-1, 99, 7, 30, 39, 4, 8]
            [-1, 99, 7, 30, 39, 4, 8]
              L                 R  *
            [-1, 99, 7, 30, 39, 4, 8] --> [-1, 4, 7, 30, 39, 8, 99]
                 L              R  *
            [-1, 4, 7, 30, 39, 8, 99]
                    L          R.  *
            [-1, 4, 7, 30, 39, 8, 99] --> [-1, 4, 7, 39, 8, 99, 30]
                            L  R  *
            [-1, 4, 7, 39, 8, 99, 30] --> [-1, 4, 7, 8, 99, 30, 39]
                        LR *
            [-1, 4, 7, 8, 99, 30, 39]
                       |
            [-1, 4, 7] 8 [99, 30, 39]
             L.  R  *         |DOWN
            [-1, 4, 7]
                LR  *
            [-1, 4, 7] Kicks out because L === *
                 R  L*
            [-1, 4]
             LR  *
            [-1, 4] Kicks out because L === *
              R  L*
                            [99, 30, 39]--> [30, 39, 99]
                            L.   R.   *        
                            [30, 39, 99]
                            LR   *
                            [30, 39, 99] Kicks out because L === *
                            R    L*
            Push into an arr in order from L to R
            [-1, 4] [7] [8] [30, 39, 99]
            End result === [-1, 4, 7, 8, 30, 39, 99]
            ## Pseudo Code