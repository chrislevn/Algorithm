function GCD(a, b) {
        if(a === 0) { return b;}
        if(b === 0) { return a;}

        return GCD(b, a % b);
    }