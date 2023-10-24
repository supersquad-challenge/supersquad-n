export const thousandFormat = (money: string | number): string => {
    if (typeof(money) === 'string' && money.length === 0) 
        return '0';
    const base = money.toString();  
    return base.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

